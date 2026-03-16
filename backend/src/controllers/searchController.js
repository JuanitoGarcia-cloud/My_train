exports.searchRoute = async (req, res) => {
  try {
    const { from, to } = req.query;

    if (!from || !to) {
      return res.status(400).json({ message: 'Paramètres from et to obligatoires' });
    }

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
        },
      ],
    });

    const results = [];

    lines.forEach((line) => {
      const stops = line.stops.sort((a, b) => a.stopOrder - b.stopOrder);

      const fromStop = stops.find((s) => s.cityId === Number(from));
      const toStop = stops.find((s) => s.cityId === Number(to));

      if (fromStop && toStop && fromStop.stopOrder < toStop.stopOrder) {
        results.push({
          lineId: line.idLine,
          trainLine: line.trainLine,
          from: {
            idCity: fromStop.city.idCity,
            name: fromStop.city.stopCityName,
            schedules: fromStop.schedules,
          },
          to: {
            idCity: toStop.city.idCity,
            name: toStop.city.stopCityName,
            schedules: toStop.schedules,
          },
        });
      }
    });

    return res.status(200).json(results);
  } catch (err) {
    console.error('Erreur searchRoute:', err);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};