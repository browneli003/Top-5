const router = require('express').Router();
const { Topics } = require('../../models');

// The `/api/products` endpoint

// get all topics
router.get('/', (req, res) => {
  // find all topics
  Topics.findAll({
    attributes: [
     'topic',
     'vote_tally',
     'date_last_voted'
    ]
  })
    .then(dbTopicsData => res.json(dbTopicsData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Topics.create({
        
    })
})

module.exports = router;