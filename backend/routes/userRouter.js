const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);
router.get('/info/:id', userController.getInfo);
router.post('/edit/:id', userController.editPersonalData);
router.get('/all', userController.getAll);
router.post('/changeRole', userController.changeRole);
router.post('/deleteUser', userController.delete);

module.exports = router;
