const express = require('express');
const router = express.Router();
const { signupUser, loginUser } = require('./../controllers/userController.js');
router.route('/login').post(loginUser);
router.route('/signup').post(signupUser);
module.exports = router;