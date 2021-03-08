const passport = require('passport')
const router = require('express').Router();
const indexController = require('../controllers/index.controller')
const userController = require('../controllers/user.controller')
const carsController = require('../controllers/car.controller')
const secure = require("../middlewares/secure.middleware");
const GOOGLE_SCOPES = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']


router.get('/', indexController.home)

router.get('/authenticate/google', passport.authenticate('google-auth', { scope: GOOGLE_SCOPES }))
router.get('/authenticate/google/cb',userController.doLoginGoogle)

router.get('/register', secure.isNotAuthenticated, userController.register)
router.post('/register', secure.isNotAuthenticated, userController.doRegister)
router.get('/login', secure.isNotAuthenticated, userController.login)
router.post('/login', secure.isNotAuthenticated, userController.doLogin)

router.post('/logout', secure.isAuthenticated, userController.logout)
router.get('/profile', secure.isAuthenticated, userController.profile)
router.get('/activate/:token', secure.isNotAuthenticated, userController.activate)

router.get('/rent', carsController.rent)
router.get('/filterCar', carsController.filterCar)

router.get('/detail/:id', secure.isAuthenticated, carsController.detail)
router.post('/reservation/:id', secure.isAuthenticated, carsController.doReserve)

router.get('/editProfile',secure.isAuthenticated,userController.editProfile)
router.post('/editProfile',secure.isAuthenticated,userController.doEditProfile)

module.exports = router;