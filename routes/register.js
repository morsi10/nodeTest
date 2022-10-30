const express = require('express');
const controllers = require('../controllers/register');
const router = express.Router();
const passport = require('passport');
router.post('/register', passport.authenticate('bearer', { session: false }), controllers.register);
router.post('/login', controllers.login);
module.exports = router;