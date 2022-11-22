const router = require('express').Router();
const userController = require('../controllers/userController');

// middleware
const veryToken = require('../helpers/verify-token');


router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router