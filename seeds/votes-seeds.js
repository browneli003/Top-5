const { Votes } = require('../models');

const voteData = [
  {
    topic_id: 1,
    user_id: 1,
    rank: 1,
    item_name: "Engrissssh"
  },
  {
    topic_id: 2,
    user_id: 1,
    rank: 3,
    item_name: "English"
  },
  {
    topic_id: 3,
    user_id: 1,
    rank: 4,
    item_name: "Something Else"
  },
  {
    topic_id: 4,
    user_id: 1,
    rank: 5,
    item_name: "Java"
  }
  // {
  //   topic_id: 2,
  //   user_id: 2,
  //   rank: 1,
  //   item_name: "Bean & Cheese"
  // },
  // {
  //   topic_id: 2,
  //   user_id: 2,
  //   rank: 2,
  //   item_name: "Chille Verde"
  // },
  // {
  //   topic_id: 2,
  //   user_id: 2,
  //   rank: 3,
  //   item_name: "Now I'm Hungry"
  // },
  // {
  //   topic_id: 2,
  //   user_id: 2,
  //   rank: 4,
  //   item_name: "Beef and Bean"
  // },
  // {
  //   topic_id: 2,
  //   user_id: 2,
  //   rank: 5,
  //   item_name: "Sushi Burrito"
  // },
  // {
  //   topic_id: 3,
  //   user_id: 3,
  //   rank: 1,
  //   item_name: "SQL"
  // },
  // {
  //   topic_id: 3,
  //   user_id: 3,
  //   rank: 2,
  //   item_name: "JavaScript"
  // },
  // {
  //   topic_id: 3,
  //   user_id: 3,
  //   rank: 3,
  //   item_name: "Anything other than VBA"
  // },
  // {
  //   topic_id: 3,
  //   user_id: 3,
  //   rank: 4,
  //   item_name: "C#"
  // },
  // {
  //   topic_id: 3,
  //   user_id: 3,
  //   rank: 5,
  //   item_name: "React"
  // }
];

const seedVotes = () => Votes.bulkCreate(voteData);

module.exports = seedVotes;