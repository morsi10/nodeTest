const express = require('express');

const controllers = require('../controllers/produit');

const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('bearer', { session: false }),  controllers.getAllProduit);
router.post('/create', passport.authenticate('bearer', { session: false }), controllers.createProduit);
router.get('/:id', passport.authenticate('bearer', { session: false }),  controllers.getProduit);
router.put('/update/:id', passport.authenticate('bearer', { session: false }),  controllers.updateProduit);
router.delete('/delete/:id', passport.authenticate('bearer', { session: false }),  controllers.deleteProduit);

module.exports = router;