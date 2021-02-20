const router = require('express').Router();
const indexController = require('../controllers/index.controller')

router.get('/', indexController.home)

module.exports = router;