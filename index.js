const express = require('express');
require('./database/connect');
const app = express();
app.use(express.json());


const client = require('./routes/client');
const produit = require('./routes/produit');
const commande = require('./routes/commande');
const register = require('./routes/register'); 

app.use('/clients', client);
app.use('/produits', produit);
app.use('/commandes', commande);
app.use('/', register);

app.listen(3000, function () {
    console.log("now listening for request on port 3000");
});