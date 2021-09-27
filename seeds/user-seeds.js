const { User } = require('../models');

const userData = [
  {
    username: "billybob",
    email: "billybob@yeehaw.com",
    password: "123pass"
  },
  {
    username: "nooneusethis",
    email: "nooneusesthis@hotmail.com",
    password: "yayk"
  },
  {
    username: "things",
    email: "things@aregood.com",
    password: "555lop"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;