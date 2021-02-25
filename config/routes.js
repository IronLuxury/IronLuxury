const passport = require('passport')
const router = require('express').Router();
const indexController = require('../controllers/index.controller')
const userController = require('../controllers/user.controller')
const secure = require("../middlewares/secure.middleware");
const GOOGLE_SCOPES = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']


router.get('/', indexController.home)

//Users
router.get('/authenticate/google', passport.authenticate('google-auth', { scope: GOOGLE_SCOPES }))
router.get('authenticate/google/cb',userController.doLoginGoogle)

router.get('/register', secure.isNotAuthenticated, userController.register)
router.post('/register', secure.isNotAuthenticated, userController.doRegister)
router.get('/login', secure.isNotAuthenticated, userController.login)
router.post('/login', secure.isNotAuthenticated, userController.doLogin)
router.get('/logout', secure.isAuthenticated, userController.logout)

router.get('/profile', secure.isAuthenticated, userController.profile)
router.get('/activate/:token', secure.isNotAuthenticated, userController.activate)

module.exports = router;