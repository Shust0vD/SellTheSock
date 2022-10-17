const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, unique: true },
  firstname: { type: DataTypes.STRING },
  secondname: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  phonenumber: { type: DataTypes.STRING, unique: true },
  dateofregistration: { type: DataTypes.DATE},
  adcount: { type: DataTypes.INTEGER },
  rating: { type: DateTypes.DOUBLE },
  role: { type: DataTypes.STRING, defaultValue: 'user' },
})

const UserFavorites = sequelize.define('user_fav', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER },
  ad_id: {type: DataTypes.INTEGER}
})
const UserAds = sequelize.define('user_ads', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER },
  ad_id: { type: DataTypes.INTEGER }
})
const Ad = sequelize.define('ad', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  info_id: { type: DataTypes.INTEGER },
  rating: { type: DataTypes.DOUBLE },
  price: { type: DataTypes.INTEGER },
  img: {type:DataTypes.BLOB}
})
const AdRating = sequelize.define('ad_rat', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ad_id: { type: DataTypes.INTEGER },
  user_id: { type: DataTypes.INTEGER },
  rating: { type: DataTypes.DOUBLE }
})
const AdInfo = sequelize.define('ad_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING }
})

Ad.hasOne(AdInfo)
AdInfo.belongsTo(Ad)

User.hasMany(UserFavorites)
UserFavorites.belongsTo(User)

Ad.hasMany(UserAds)
UserAds.belongsTo(Ad)

User.hasMany(UserAds)
UserAds.belongsTo(User)

Ad.hasMany(UserFavorites)
UserFavorites.belongsTo(Ad)

User.hasMany(AdRating)
AdRating.belongsTo(User)

Ad.hasMany(AdRating)
AdRating.belongsTo(Ad)


module.exports = {
  User,
  UserFavorites,
  UserAds,
  Ad,
  AdRating,
  AdInfo
}

