const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

dotenv.config();

const app = express();

// CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));

// Body parser
app.use(express.json());

// Rate Limiter
app.use(rateLimit({
  windowMs: 720 * 60 * 1000, // 720 min
  max: 100,// max 100 requêtes
  message: "Trop de requêtes, réessayez plus tard."
}));

// Routes
const authRoutes = require('./routes/authRoutes');
const cityRoutes = require('./routes/cityRoutes');
const lineRoutes = require('./routes/lineRoutes');
const searchRoutes = require('./routes/searchRoutes');

app.get('/', (req, res) => {
  res.json({ message: 'API Train Routes OK' });
});

app.use('/auth', authRoutes);
app.use('/cities', cityRoutes);
app.use('/lines', lineRoutes);
app.use('/search', searchRoutes);

// Middleware 404 API
app.use((req, res) => {
  res.status(404).json({ message: 'Route introuvable' });
});

// Synchronisation DB (optionnel en prod)
async function initDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie.');
    await sequelize.sync({ alter: false });
  } catch (err) {
    console.error('Erreur de connexion à la base de données:', err);
  }
}

initDatabase();

module.exports = app;