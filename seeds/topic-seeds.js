const { Topics } = require('../models');

const topicData = [
  {
    topic: 'Some languages',
    vote_tally: 10,
    user_id: 1
  },
  {
    topic: 'Top 5 Burritos',
    vote_tally: 22,
    user_id: 2
  },
  {
    topic: 'Top 5 coding languages',
    vote_tally: 2,
    user_id: 3
  }
];

const seedTopics = () => Topics.bulkCreate(topicData);

module.exports = seedTopics;