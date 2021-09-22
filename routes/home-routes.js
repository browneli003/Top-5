const router = require('express').Router();
const sequelize = require('../config/connection');
const { Topics, User, Votes } = require('../models');


// render home page
router.get('/', (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  });
});

// render login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;