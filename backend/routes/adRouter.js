const Router = require('express');
const router = new Router();
const adController = require('../controllers/adController');

router.post('/create', adController.create);
router.get('/all', adController.getAll);
router.get('/:id', adController.getOne);
router.get('/user-ads/:id', adController.getUserAds);
router.post('/delete-ad/:id', adController.delete);

module.exports = router;
