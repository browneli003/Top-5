const router = require('express').Router();
const { Topics, Votes, User } = require('../../models');
const { update } = require('../../models/Topics');

// The `/api/topics` endpoint

// get all topics
router.get('/', (req, res) => {
  // find all topics
  Topics.findAll({
    attributes: [
      'id',
     'topic',
     'vote_tally'
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
      attributes: ['id']

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
    id: req.body.id,
    topic: req.body.topic,
    vote_tally: req.body.vote_tally
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