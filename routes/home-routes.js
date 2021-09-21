const router = require('express').Router();
const sequelize = require('../config/connection');
const { Topics, User, Votes } = require('../models')
// get all posts for homepage
router.get('/', (req, res) => {
  console.log('req.session');
  Topics.findAll({
    attributes: [
      'id',
      'topic',
      'vote_tally',
      'user_id',
      [sequelize.literal('(SELECT COUNT(*) FROM Topics WHERE topic = topic'), 'vote_tally']    ],
    include: [
      {
        model: Votes,
        attributes: ['id', 'topic_id', 'user_id', 'rank', 'item_name'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbTopicData => {
      const posts = dbTopicData.map(post => post.get({ plain: true }));

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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/:id', (req, res) => {
    Topics.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'topic',
        'vote_tally',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM Topics WHERE topic = topic'), 'vote_tally']      ],
      include: [
        {
          model: Votes,
          attributes: ['topic_id','user_id','item_name','created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbTopicsData => {
        if (!dbTopicsData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        // serialize the data
        const post = dbTopicsData.get({ plain: true });
  
        // pass data to template
        res.render('single-topic', { 
        post,
        loggedIn: req.session.loggedIn 
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;