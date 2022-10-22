const mongoose = require('mongoose');

const CommandeSchema = new mongoose.Schema({
    client : {
        type: mongoose.Schema.Types.ObjectId ,
        ref:'client'
    },
    
    Produits:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'Produit'
    }],
    prixTotal:{
        type: Number
    }
    
})

const Commande = mongoose.model('commande', CommandeSchema);
module.exports = Commande;