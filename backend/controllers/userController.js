const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');
const { omit } = require('lodash');

const generateJwt = (id, username, role) => {
  return jwt.sign({ id, username, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
};

class UserController {
  async registration(req, res, next) {
    const { username, password, role } = req.body;
    if (!username || !password) {
      return next(ApiError.badRequest('Некорректный username или password'));
    }
    const candidate = await User.findOne({ where: { username } });
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким username уже существует'));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ username, role, password: hashPassword });
    const token = generateJwt(user.id, user.username, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'));
    }
    const token = generateJwt(user.id, user.username, user.role);
    return res.json({ token });
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.username, req.user.role);
    return res.json({ token });
  }

  async getInfo(req, res, next) {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return next(ApiError.badRequest('Некорректный id пользователя'));
    }
    return res.json(omit(user.dataValues, ['password']));
  }

  async editPersonalData(req, res, next) {
    const { id } = req.params;
    const { firstname, secondName, phoneNumber } = req.body;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return next(ApiError.badRequest('Некорректный id пользователя'));
    }
    const checkPhone = await User.findOne({ where: { phoneNumber } });
    if (checkPhone && checkPhone.id !== user.id && phoneNumber !== null) {
      return next(ApiError.badRequest('Пользователь с таким номером телефона уже существует'));
    }
    if (user.firstname !== firstname) user.firstname = firstname;
    if (user.secondName !== secondName) user.secondName = secondName;
    if (user.phoneNumber !== phoneNumber) user.phoneNumber = phoneNumber;
    
    await user.save();
    return res.json(omit(user.dataValues, ['password']));
  }

  async changeRole(req, res, next) {
    const { id, role } = req.body;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return next(ApiError.badRequest('Некорректный id пользователя'));
    }
    if (user.role !== role) user.role = role;
    await user.save();
    return res.json(omit(user.dataValues, ['password']));
  }

  async getAll(req, res) {
    const users = await User.findAll();
    const usersDataValues = users.map((user) => omit(user.dataValues, ['password']));
    return res.json(usersDataValues);
  }

  async delete(req, res) {
    const { id } = req.body;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return next(ApiError.badRequest('Некорректный id пользователя'));
    }
    user.destroy();
  }
}

module.exports = new UserController();
