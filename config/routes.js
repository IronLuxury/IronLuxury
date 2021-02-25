const passport = require('passport')
const router = require('express').Router();
const indexController = require('../controllers/index.controller')
const userController = require('../controllers/user.controller')

const GOOGLE_SCOPES = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']


router.get('/', indexController.home)

//Users
router.get('/authenticate/google', passport.authenticate('google-auth', { scope: GOOGLE_SCOPES }))
router.get('authenticate/google/cb',userController.doLoginGoogle)
router.get('/register', userController.register)
router.post('/register', userController.doRegister)

router.get('/login', userController.login)
router.post('/login', userController.doLogin)
router.get('/activate/:token', userController.activate)

module.exports = router;