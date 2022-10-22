const Client = require('../models/client');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
exports.register = async (req, res) => {
    const client = new Client({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    });
    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set client password to hashed password
    client.password = await bcrypt.hash(client.password, salt);
    Client.findOne({ email: req.body.email }, (error, result) => {
        if (result) {
            res.send("Email already used");
        } else {
            client.save().then((client) => {
                res.send(client);
            });
        }
    });

};


exports.login = async (req, res) => {
    const client = new Client({
        email: req.body.email,
        password: req.body.password,
    });
    try {
        // The secret should be an unguessable long string (you can use a password generator for this!)
       
        const clientsearch = await Client.findOne({ email: req.body.email });
        if (clientsearch) {
            const validPassword = await bcrypt.compare(req.body.password, clientsearch.password);
            if (validPassword) {
                return res.json({
                    token: jwt.sign({ client: clientsearch._id }, process.env.secretKey, {expiresIn: "1d"}),
                });
            } else {
                res.status(500).send("Invalid password");
            }
        } else {
            res.status(500).send("client does not exist");
        }
       /* client.save().then((client) => {
            res.send(client);
        });*/
    } catch (error) {
        res.send(error);
    }



};