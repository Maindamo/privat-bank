const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define("translations", {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sender_name: {
      type: DataTypes.STRING,
    },
    sender_card: {
      type: DataTypes.STRING,
    },
    sender_card: {
      type: DataTypes.STRING,
    },
    receiver_name: {
      type: DataTypes.STRING,
    },
    receiver_card: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.STRING,
    },
    day: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    datetime: {
      type: DataTypes.STRING,
    },
  });
};
