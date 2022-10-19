const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("template", {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    value: {
      type: DataTypes.STRING,
    },
  });
};
