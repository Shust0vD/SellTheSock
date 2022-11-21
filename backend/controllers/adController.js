const ApiError = require('../error/ApiError');
const { Ad } = require('../models/models');

class AdController {
  async create(req, res, next) {
    const { title, description, price, img, userId } = req.body;
    if (!title || !price) {
      return next(ApiError.badRequest('Некорректное название или цена'));
    }
    const newAd = await Ad.create({ title, description, price, img, userId });
    return res.json(newAd);
  }

  async getAll(req, res, next) {
    const ads = await Ad.findAll();
    const adsDataValues = ads.map((ad) => ad.dataValues);
    return res.json(adsDataValues);
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    const ad = await Ad.findOne({ where: { id } });
    if (!ad) {
      return next(ApiError.badRequest('Некорректный id объявления'));
    }
    return res.json(ad.dataValues);
  }

  async getUserAds(req, res, next) {
    const { id } = req.params;
    const ads = await Ad.findAll({ where: { userId: id } });
    const adsDataValues = ads.map((ad) => ad.dataValues);
    return res.json(adsDataValues);
  }

  async delete(req, res) {
    const { id } = req.params;
    const ad = await Ad.findOne({ where: { id } });
    if (!ad) {
      return next(ApiError.badRequest('Некорректный id объявления'));
    }
    ad.destroy();
    return res.json();
  }
}

module.exports = new AdController();
