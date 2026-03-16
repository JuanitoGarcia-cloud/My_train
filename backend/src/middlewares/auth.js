const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(requiredRole = null) {
  return (req, res, next) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ')
      ? authHeader.substring(7)
      : null;

    if (!token) {
      return res.status(401).json({ message: 'Token manquant' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (requiredRole && decoded.role !== requiredRole) {
        return res.status(403).json({ message: 'Accès refusé' });
      }

      next();
    } catch (err) {
      return res.status(401).json({ message: 'Token invalide' });
    }
  };
}

module.exports = auth;