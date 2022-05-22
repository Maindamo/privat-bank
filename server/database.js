const mysql = require("mysql2/promise");

class DataBase {
  constructor(database) {
    this.database = database;
  }

  async getPaymentHistory() {
    const conn = await mysql.createConnection(this.database);
    const [rows] = await conn.execute(`SELECT * FROM \`payments\` ORDER BY \`datetime\` DESC LIMIT 10`);
    conn.end();
    return rows;
  }

  async getTemplateName() {
    const conn = await mysql.createConnection(this.database);
    const [rows] = await conn.execute(`SELECT * FROM \`template-name\` LIMIT 3`);
    conn.end();
    return rows;
  }

  async addPayment(sender_name, sender_card, receiver_name, receiver_card, amount, day, time) {
    const datetime = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    const conn = await mysql.createConnection(this.database);
    await conn.execute(
      `INSERT INTO \`payments\`(\`sender_name\`, \`sender_card\`, \`receiver_name\`, \`receiver_card\`, \`amount\`, \`day\`, \`time\`, \`datetime\`) VALUES ("${sender_name}", "${sender_card}", "${receiver_name}", "${receiver_card}", "${amount}", "${day}", "${time}", "${datetime}")`
    );
    conn.end();
  }

  async editName(name1, name2, name3) {
    const conn = await mysql.createConnection(this.database);
    await conn.execute(`UPDATE \`template-name\` SET \`name\`='${name1}' WHERE id = 1`);
    await conn.execute(`UPDATE \`template-name\` SET \`name\`='${name2}' WHERE id = 2`);
    await conn.execute(`UPDATE \`template-name\` SET \`name\`='${name3}' WHERE id = 3`);

    conn.end();
  }
}

module.exports = new DataBase({
  port: "3306",
  user: "gen_user",
  host: "188.225.9.103",
  database: "default_db",
  password: "cz971pwdb9",
});
