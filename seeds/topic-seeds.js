const { Topics } = require('../models');

const topicData = [
  {
    topic: 'Some languages',
    item1: 'JavaScript',
    item2: 'html',
    item3: 'CSS',
    item4: 'C++',
    item5: 'Python',
    vote_tally: 10,
    user_id: 1
  },
  {
    topic: 'Top 5 Burritos',
    item1: 'Chile Verde',
    item2: 'Chicken',
    item3: 'pork',
    item4: 'veggie',
    item5: 'no borrito',
    vote_tally: 22,
    user_id: 2
  },
  {
    topic: 'Some languages',
    item1: 'JavaScript',
    item2: 'html',
    item3: 'CSS',
    item4: 'C++',
    item5: 'Python',
    vote_tally: 10,
    user_id: 1
  },
  {
    topic: 'Top 5 Trucks',
    item1: 'Tacoma',
    item2: 'Tacoma',
    item3: 'Tacoma',
    item4: 'Tacoma',
    item5: 'Tacoma',
    vote_tally: 6000000,
    user_id: 4
  }
];




const seedTopics = () => Topics.bulkCreate(topicData);

module.exports = seedTopics;