const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const { FOREIGNKEYS } = require('sequelize/types/query-types')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstname: { type: DataTypes.STRING },
    secondname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    phonenumber: { type: DataTypes.STRING, unique: true },
    dateofregistration: { type: DataTypes.TIME },
    adcount: { type: DataTypes.INTEGER },
    countryid: { type: DataTypes.STRING },
    roleid: { type: DataTypes.STRING },
    rating: { type: DateTypes.DOUBLE }
})

//const ADinfo = sequelize.define('adinfo', {
//    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//    title: { type: DataTypes.STRING },
//    description: {type: DataTypes.STRING}
//})
//const AD = sequelize.define('ad', {
//    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//    rating: { type: DataTypes.DOUBLE },
//    price: { type: DataTypes.DOUBLE },
//    img: { type: DataTypes.BLOB },
//    infoid: { type: DateTypes.INTEGER, references: {

//}}
//})
module.exports = {
    User
}
