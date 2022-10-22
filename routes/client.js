const express = require('express');

const controllers = require('../controllers/client');

const router = express.Router();
//const passport = require('passport');

router.get('/',  controllers.getAllClient);
router.post('/create', controllers.createClient);
router.get('/:id',  controllers.getClient);
router.put('/update/:id',  controllers.updateClient);
router.delete('/delete/:id',  controllers.deleteClient);

module.exports = router;