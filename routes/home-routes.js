const router = require('express').Router();
const sequelize = require('../config/connection');
const { Topics, User, Votes } = require('../models');


router.get('/', (req, res) => {
  Topics.findAll({
    attributes: [
      'id',
      'topic',
      'item1',
      'item2',
      'item3',
      'item4',
      'item5',
      'vote_tally',
      'created_at'
    ],
    include: {
      model: Votes,
      attributes: ['id', 'topic_id', 'rank', 'item_name'],

      model: User,
      attributes: ['id', 'username']
    }
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
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