const { User } = require('../models');

const userData = [
  {
    email: "billybob@yeehaw.com",
    password: "123pass"
  },
  {
    email: "nooneusesthis@hotmail.com",
    password: "yay"
  },
  {
    email: "things@aregood.com",
    password: "555"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;