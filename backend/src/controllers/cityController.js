const { City } = require('../models');

exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.findAll({
      order: [['stopCityName', 'ASC']],
    });
    return res.status(200).json(cities);
  } catch (err) {
    console.error('Erreur getAllCities:', err);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};