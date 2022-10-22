const Client = require('../models/client');
const Produit = require('../models/produit');
const Commande = require('../models/commande');

exports.createCommande = async (req, res, next) => {
    try {
        var total = 0;
        req.body.produits.forEach(function (idProduit) {
           
            Produit.findById(idProduit).then((produit) => {
                produit.quantite = produit.quantite - 1;
                produit.save(produit);
                total = total + produit.prix
                console.log("total" + total)
                console.log("Prix" + produit.prix)
            });
            
        });
        console.log(total)
        const commande = new Commande({
            client: req.params.idClient,
            Produits: req.body.produits,
            prixTotal: total
        });
        commande.save().then((commande) => {

            res.send(commande);
        });
    } catch (error) {
        res.send(error);
    }
}

exports.getAllCommande = async (req, res, next) => {
    try {
        let commandes = await Commande.find();
        res.send(commandes);
    } catch (error) {
        next();
    }
};

exports.getCommande = async (req, res, next) => {
    try {
        let commande = await Commande.findById(req.params.id);
        res.send(commande)
    } catch (error) {
        next();
    }
};