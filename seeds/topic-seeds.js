const { Topics } = require('../models');

const topicData = [
  {
    topic: 'Top 5 coding languages',
    vote_tally: 22
  }
];

const seedTopics = () => Topics.bulkCreate(topicData);

module.exports = seedTopics;