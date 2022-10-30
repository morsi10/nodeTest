const mongoose = require('mongoose');

const ProduitSchema = new mongoose.Schema({
    nom:{
        type: String,
        required: true
    }, 
    description : {
        type : String
    },
    quantite:{
        type: Number,
        required: true
    },
    prix:{
        type: Number,
        required: true
    },
})

const Produit = mongoose.model('produit', ProduitSchema);
module.exports = Produit;