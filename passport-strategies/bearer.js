const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const Client = require('../models/client');
const jwt = require('jsonwebtoken');
passport.use(new BearerStrategy(
  (token, done) => {
    const decodeToken = jwt.verify(token, process.env.secretKey);
    Client.findOne({_id:decodeToken.client}, function (err, client) {
      if (err) { return done(err); }
      if (!client) { return done(null, false); }
      return done(null, client, { scope: 'all' });
    });
  }
));
