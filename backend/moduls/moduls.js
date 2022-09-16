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

module.exports = {
    User
}
