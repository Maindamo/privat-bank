const { sequelize, Template } = require("./index");

(async () => {
  await sequelize.sync();
  await Template.create({ key: "name_1", value: "Иван 1" });
  await Template.create({ key: "name_2", value: "Иван 2" });
  await Template.create({ key: "name_3", value: "Иван 3" });
})();
