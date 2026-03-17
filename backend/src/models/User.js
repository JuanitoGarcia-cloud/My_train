const db = require('../config/database');

const User = db.sequelize.define( 'User',
  {
    idUser: {
      type: db.sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: db.sequelize.STRING(100),
      allowNull: false,
    },
    phone: {
      type: db.sequelize.STRING(20),
      allowNull: false,
      unique: true,
    },
    passwordHash: {
      type: db.sequelize.STRING(255),
      allowNull: false,
    },
    role: {
      type: db.sequelize.ENUM('USER', 'ADMIN'),
      allowNull: false,
      defaultValue: 'USER',
    },
  },
  {
    tableName: 'utilisateur',
    timestamps: false,
  }
);

module.exports = User;