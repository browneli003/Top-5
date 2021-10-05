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
    topic: 'Top 5 Burritos',
    item1: 'Chile Verde',
    item2: 'Chicken',
    item3: 'pork',
    item4: 'veggie',
    item5: 'no borrito',
    vote_tally: 22,
    user_id: 2
  }
];




const seedTopics = () => Topics.bulkCreate(topicData);

module.exports = seedTopics;