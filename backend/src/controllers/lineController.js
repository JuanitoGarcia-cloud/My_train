const { TrainLine, LineStop, City, Schedule } = require('../models');

exports.getAllLinesWithStops = async (req, res) => {
  try {
    const lines = await TrainLine.findAll({
      include: [
        {
          model: LineStop,
          as: 'stops',
          include: [
            {
              model: City,
              as: 'city',
              attributes: ['idCity', 'stopCityName'],
            },
            {
              model: Schedule,
              as: 'schedules',
              attributes: ['idSchedule', 'timeStopCity'],
            },
          ],
          order: [['stopOrder', 'ASC']],
        },
      ],
      order: [['trainLine', 'ASC']],
    });

    return res.status(200).json(lines);
  } catch (err) {
    console.error('Erreur getAllLinesWithStops:', err);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};