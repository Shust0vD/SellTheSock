const sequelize = require('../db')
const { DataTypes } = require('Sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstname: { type: DataTypes.STRING },
    secondname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    phonenumber: { type: DataTypes.STRING, unique: true },
    dateofregistration: { type: DataTypes.DATE},
    adcount: { type: DataTypes.INTEGER },
    rating: { type: DateTypes.DOUBLE }
})

const user_Favorites = sequelize.define('user_fav', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    ad_id: {type: DataTypes.INTEGER}
})
const user_Ads = sequelize.define('user_ads', {
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
const ad_Rating = sequelize.define('ad_rat', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ad_id: { type: DataTypes.INTEGER },
    user_id: { type: DataTypes.INTEGER },
    rating: { type: DataTypes.DOUBLE }
})
const ad_Info = sequelize.define('ad_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING }
})

Ad.hasOne(ad_Info)
Ad.belongsTo(Ad)

User.hasMany(user_Favorites)
user_Favorites.belongsTo(User)

Ad.hasMany(user_Ads)
user_Ads.belongsTo(Ad)

User.hasMany(user_Ads)
user_Ads.belongsTo(User)

Ad.hasMany(user_Favorites)
user_Favorites.belongsTo(Ad)

User.hasMany(ad_Rating)
ad_Rating.belongsTo(User)

Ad.hasMany(ad_Rating)
ad_Rating.belongsTo(Ad)



module.exports = {
    User,
    user_Favorites,
    user_Ads,
    Ad,
    ad_Rating,
    ad_Info
}
