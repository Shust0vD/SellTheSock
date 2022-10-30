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

const Ad = sequelize.define('ads', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.DOUBLE },
  img: { type: DataTypes.STRING },
});

const Rating = sequelize.define('rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
  evaluator_id: { type: DataTypes.INTEGER, allowNull: false },
  evaluated_id: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(Ad);
Ad.belongsTo(User);

module.exports = {
  User,
  Ad,
  Rating,
};
