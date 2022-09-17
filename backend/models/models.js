const sequelize = require('../db')
const { DataTypes } = require('sequelize')

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

module.exports = {
    User
}
