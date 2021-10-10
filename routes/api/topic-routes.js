const router = require('express').Router();
const { Topics, Votes, User } = require('../../models');

// The `/api/topics` endpoint

// get all topics
router.get('/', (req, res) => {
  // find all topics
  Topics.findAll({
    attributes: [
      'id',
     'topic',
     'item1',
     'item2',
     'item3',
     'item4',
     'item5',
     'vote_tally'
    ],
    include: {
      model: Votes,
      attributes: ['id', 'topic_id','rank', 'item_name'],
      
      model: User,
      attributes: ['id']
    }
  }).then(dbTopicsData => 
      {
        res.json(dbTopicsData);
        console.log(dbTopicsData);
      })
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
     'item1',
     'item2',
     'item3',
     'item4',
     'item5',
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
    topic: req.body.newTopic,
    item1: req.body.newItem1,
    item2: req.body.newItem2,
    item3: req.body.newItem3,
    item4: req.body.newItem4,
    item5: req.body.newItem5,
    vote_tally: 1,
    user_id: "test"
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

router.put('/upvote', (req, res) => {
  // custom static method created in models/Post.js
  // make sure the session exists first
  if (req.session) {
      // pass session id along with all destructured properties on req.body
      Topics.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
          .then(updatedVoteData => res.json(updatedVoteData))
          .catch(err => {
              console.log(err);
              res.status(500).json(err);
          });
  }
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