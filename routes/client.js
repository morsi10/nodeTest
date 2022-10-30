const express = require('express');

const controllers = require('../controllers/client');

const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('bearer', { session: false }),  controllers.getAllClient);
router.post('/create', passport.authenticate('bearer', { session: false }), controllers.createClient);
router.get('/:id', passport.authenticate('bearer', { session: false }),  controllers.getClient);
router.put('/update/:id', passport.authenticate('bearer', { session: false }),  controllers.updateClient);
router.delete('/delete/:id', passport.authenticate('bearer', { session: false }),  controllers.deleteClient);

module.exports = router;