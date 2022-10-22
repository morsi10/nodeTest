const express = require('express');

const controllers = require('../controllers/commande');

const router = express.Router();
//const passport = require('passport');

router.get('/',  controllers.getAllCommande);
router.post('/create/:idClient', controllers.createCommande);
 router.get('/:id',  controllers.getCommande);
// router.put('/update/:id',  controllers.updateCommande);
// router.delete('/delete/:id',  controllers.deleteCommande);

module.exports = router;