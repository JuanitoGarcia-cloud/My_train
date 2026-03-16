const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LineStop = sequelize.define(
  'LineStop',
  {
    idLineStop: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lineId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stopOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'line_stop',
    timestamps: false,
  }
);

module.exports = LineStop;