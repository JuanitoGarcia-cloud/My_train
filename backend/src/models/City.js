const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const StopCity = sequelize.define(
  'StopCity',
  {
    idCity: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    stopCityName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'ville',
    timestamps: false,
  }
);
module.exports = StopCity;
