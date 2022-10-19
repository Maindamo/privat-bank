const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "root", "", {
  host: "0.0.0.0",
  dialect: "sqlite",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
  storage: "database.sqlite",
});

const Translations = require("../models/translations")(sequelize, Sequelize.DataTypes);
const Template = require("../models/template")(sequelize, Sequelize.DataTypes);

module.exports = {
  sequelize,
  Translations,
  Template,
};
