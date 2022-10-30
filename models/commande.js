const mongoose = require('mongoose');

const CommandeSchema = new mongoose.Schema({
    client : {
        type: mongoose.Schema.Types.ObjectId ,
        ref:'client',
        required: true
    },
    
    Produits:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'Produit',
        required: true
    }],
    prixTotal:{
        type: Number,
        required: true
    }
    
})

const Commande = mongoose.model('commande', CommandeSchema);
module.exports = Commande;