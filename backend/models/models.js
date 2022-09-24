const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  firstname: { type: DataTypes.STRING },
  secondName: { type: DataTypes.STRING },
  phoneNumber: { type: DataTypes.STRING, unique: true },
  dateOfRegistration: { type: DataTypes.DATE },
  adCount: { type: DataTypes.INTEGER, defaultValue: 0 },
  rating: { type: DataTypes.DOUBLE, defaultValue: 0 },
  role: { type: DataTypes.STRING, defaultValue: 'user' },
});

module.exports = {
  User,
};
