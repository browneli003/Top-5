const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Topics, Votes, User } = require('../../models');

// The `/api/topics` endpoint

// get all topics
router.get('/', (req, res) => {
  // find all topics
  Topics.findAll({
    attributes: [
      'id',
     'topic',
     'vote_tally',
    [sequelize.literal('(SELECT COUNT(*) FROM Topics WHERE topic = topic'), 'vote_tally']
    ],
    include: {
      model: Votes,
      attributes: ['id', 'topic_id','rank', 'item_name'],
      
      model: User,
      attributes: ['id']
    }
  })
    .then(dbTopicsData => res.json(dbTopicsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Topics.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'topic',
      'vote_tally'
    ],
    include: {
      model: User,
      attributes: ['username']

    }
  })
  .then(dbTopicsData => res.json(dbTopicsData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  Topics.create({
    topic: req.body.topic,
    vote_tally: req.body.vote_tally,
    user_id: req.body.user_id
  })
  .then(dbTopicsData => res.json(dbTopicsData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // custom static method created in models/Post.js
  Topics.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbTopicsData => res.json(dbTopicsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });  
});

router.delete('/:id', (req, res) => {
  Topics.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbTopicsData => {
    if (!dbTopicsData) {
      res.status(404).json({ message: 'No topic found!'});
      return;
    }
    res.json(dbTopicsData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});



module.exports = router;