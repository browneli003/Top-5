const router = require('express').Router();
const sequelize = require('../config/connection');

// render home page
router.get('/', (req, res) => {
  res.render('homepage');
});

// render login page
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;