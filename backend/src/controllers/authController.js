const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const SALT_ROUNDS = 10;

exports.register = async (req, res) => {
  try {
    const { username, phone, password } = req.body;

    if (!username || !phone || !password) {
      return res.status(400).json({ message: 'Champs obligatoires manquants' });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: 'Le mot de passe doit contenir au moins 8 caractères' });
    }

    const existing = await User.findOne({ where: { phone } });
    if (existing) {
      return res.status(409).json({ message: 'Téléphone déjà utilisé' });
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await User.create({
      username,
      phone,
      passwordHash,
      role: 'USER',
    });

    return res.status(201).json({
      idUser: user.idUser,
      username: user.username,
      phone: user.phone,
      role: user.role,
    });
  } catch (err) {
    console.error('Erreur register:', err);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.login = async (req, res) => {
  try {
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(400).json({ message: 'Champs obligatoires manquants' });
    }

    const user = await User.findOne({ where: { phone } });
    if (!user) {
      return res.status(401).json({ message: 'Identifiants invalides' });
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return res.status(401).json({ message: 'Identifiants invalides' });
    }

    const token = jwt.sign(
      {
        idUser: user.idUser,
        phone: user.phone,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
    );

    return res.status(200).json({
      token,
      user: {
        idUser: user.idUser,
        username: user.username,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (err) {
    console.error('Erreur login:', err);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.idUser, {
      attributes: ['idUser', 'username', 'phone', 'role'],
    });

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur introuvable' });
    }

    return res.status(200).json(user);
  } catch (err) {
    console.error('Erreur getMe:', err);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};