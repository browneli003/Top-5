const { Topics } = require('../models');

const topicData = [
  {
    topic: 'Top 5 coding languages',
    vote_tally: 22
  },
  
  {
    topic: 'Top 5 software engineers',
    vote_tally: 26
  }
];




const seedTopics = () => Topics.bulkCreate(topicData);

module.exports = seedTopics;