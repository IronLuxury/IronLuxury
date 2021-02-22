const router = require('express').Router();
const indexController = require('../controllers/index.controller')
const userController = require('../controllers/user.controller')

router.get('/', indexController.home)

//Users
router.get('/register', userController.register)
router.post('/register', userController.doRegister)

router.get('/login', userController.login)
router.get('/activate/:token', userController.activate)

module.exports = router;