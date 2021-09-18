const seedTopics = require('./topic-seeds');
const seedUser = require('./user-seeds');
const seedVote = require('./votes-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  await seedTopics();
  await seedVote();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  process.exit(0);
};

seedAll();