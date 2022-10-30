const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    nom:{
        type: String,
        required: true
    }, 
    prenom : {
        type : String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }, 
    role:{
        type: String,
        default: "client",
        required: true
    }, 
    
})

const Client = mongoose.model('client', ClientSchema);
module.exports = Client;