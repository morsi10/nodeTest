const Produit = require('../models/produit');

  exports.getAllProduit = async(req,res,next) => {
    
    
     try {
        let produits = await  Produit.find();
        res.send(produits);
     } catch (error) {
        next();
     }
  };
  
  
  exports.createProduit =  (req, res) => {
    const produit = new Produit({
        nom: req.body.nom,
        description: req.body.description,
        quantite: req.body.quantite,
        prix: req.body.prix,
    });
     produit.save().then((produit)=>{
        res.send(produit);
     });
  };
  
  exports.getProduit = async (req, res,next) => {
    try {
      let produit = await Produit.findById(req.params.id);
      res.send(produit)
    } catch (error) {
      next();
    }
   
  };
  
  exports.updateProduit =  (req, res) => {
    Produit.findById(req.params.id).then((produit)=>{
        produit.nom = req.body.nom;
        produit.description = req.body.description; 
        produit.quantite = req.body.quantite; 
        produit.prix = req.body.prix; 
        produit.save().then((produit)=>{
            res.send(produit);
        })
    });   
  };
  
  exports.deleteProduit =  (req, res) => {
    Produit.findByIdAndRemove(req.params.id).then(()=>{
        res.send({ message: 'produit deleted' });
    }).catch((err)=>
    {
       res.send(err);
    });
  };