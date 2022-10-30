const express = require('express');

const controllers = require('../controllers/commande');

const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('bearer', { session: false }),  controllers.getAllCommande);
router.post('/create/:idClient', passport.authenticate('bearer', { session: false }), controllers.createCommande);
 router.get('/:id', passport.authenticate('bearer', { session: false }),  controllers.getCommande);
// router.put('/update/:id',  controllers.updateCommande);
// router.delete('/delete/:id',  controllers.deleteCommande);

module.exports = router;