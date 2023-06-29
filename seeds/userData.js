const { User } = require('../models');

const userData = [
    {
      username: "Sally",
      email: "sally@hotmail.com",
      password: "password12345"
    },
    {
      username: "Lorenzo",
      email: "lorenzo@gmail.com",
      password: "password12345"
    },
    {
      username: "Amit",
      email: "amit@aol.com",
      password: "password12345"
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;