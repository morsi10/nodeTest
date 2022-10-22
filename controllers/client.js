const Client = require('../models/client');

  exports.getAllClient = async(req,res,next) => {
    
    
     try {
        let clients = await  Client.find();
        res.send(clients);
     } catch (error) {
        next();
     }
  };
  
  
  exports.createClient =  (req, res) => {
    const client = new Client({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    });
     client.save().then((client)=>{
        res.send(client);
     });
  };
  
  exports.getClient = async (req, res,next) => {
    try {
      let client = await Client.findById(req.params.id);
      res.send(client)
    } catch (error) {
      next();
    }
   
  };
  
  exports.updateClient =  (req, res) => {
    Client.findById(req.params.id).then((client)=>{
        client.nom = req.body.nom;
        client.prenom = req.body.prenom; 
        client.email = req.body.email; 
        client.password = req.body.password; 
        client.role = req.body.role; 
        client.save().then((client)=>{
            res.send(client);
        })
    });   
  };
  
  exports.deleteClient =  (req, res) => {
    Client.findByIdAndRemove(req.params.id).then(()=>{
        res.send({ message: 'client deleted' });
    }).catch((err)=>
    {
       res.send(err);
    });
  };