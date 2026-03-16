const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Schedule = sequelize.define(
  'Schedule',
  {
    idSchedule: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lineStopId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    timeStopCity: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    tableName: 'horaire',
    timestamps: false,
  }
);

module.exports = Schedule;