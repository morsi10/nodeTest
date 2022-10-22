const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    nom:{
        type: String
    }, 
    prenom : {
        type : String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }, 
    role:{
        type: String
    }, 
    
})

const Client = mongoose.model('client', ClientSchema);
module.exports = Client;