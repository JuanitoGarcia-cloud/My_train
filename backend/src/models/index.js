const sequelize = require('../config/database');
const User = require('./User');
const StopCity = require('./StopCity');
const TrainLine = require('./TrainLine');
const LineStop = require('./LineStop');
const Schedule = require('./Schedule');

TrainLine.hasMany(LineStop, {
  foreignKey: 'lineId',
  as: 'stops',
});
LineStop.belongsTo(TrainLine, {
  foreignKey: 'lineId',
  as: 'line',
});

StopCity.hasMany(LineStop, {
  foreignKey: 'cityId',
  as: 'lineStops',
});
LineStop.belongsTo(City, {
  foreignKey: 'cityId',
  as: 'city',
});

LineStop.hasMany(Schedule, {
  foreignKey: 'lineStopId',
  as: 'schedules',
});
Schedule.belongsTo(LineStop, {
  foreignKey: 'lineStopId',
  as: 'lineStop',
});

module.exports = {
  sequelize,
  User,
  City,
  TrainLine,
  LineStop,
  Schedule,
};