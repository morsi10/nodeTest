const mongoose = require('mongoose');

const ProduitSchema = new mongoose.Schema({
    nom:{
        type: String
    }, 
    description : {
        type : String
    },
    quantite:{
        type: Number
    },
    prix:{
        type: Number
    },
})

const Produit = mongoose.model('produit', ProduitSchema);
module.exports = Produit;