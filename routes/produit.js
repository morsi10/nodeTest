const express = require('express');

const controllers = require('../controllers/produit');

const router = express.Router();
//const passport = require('passport');

router.get('/',  controllers.getAllProduit);
router.post('/create', controllers.createProduit);
router.get('/:id',  controllers.getProduit);
router.put('/update/:id',  controllers.updateProduit);
router.delete('/delete/:id',  controllers.deleteProduit);

module.exports = router;