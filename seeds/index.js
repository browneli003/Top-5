const seedTopics = require('./topic-seeds');
const seedUser = require('./user-seeds');
const seedVotes = require('./votes-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');
  await seedTopics();
  console.log('\n----- TOPICS SEEDED -----\n');
  await seedVotes();
  console.log('\n----- VOTES SEEDED -----\n');

  process.exit(0);
};

seedAll();