const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node_test')
.then(()=> console.log('connected to database'))
.catch(err => console.log(err));

module.exports = mongoose;