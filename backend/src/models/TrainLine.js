const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TrainLine = sequelize.define(
  'TrainLine',
  {
    idLine: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    trainLine: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: 'ligne_train',
    timestamps: false,
  }
);

module.exports = TrainLine;
