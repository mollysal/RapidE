const { User } = require('../models');

const userData = [
  {
    name: 'Jordan',
    email: 'jordan23@gmail.com',
    password: 'password12345',
  },
  {
    name: 'James',
    email: 'GoatJames@gmail.com',
    password: 'password12345',
  },
  {
    name: 'Sarah',
    email: 'sarah22@gmail.com',
    password: 'password12345'
  },
  {
    name: 'Tyler',
    email: 'tylerheat@gmai.com',
    password: 'password12345',
  },
  {
    name: 'Mary',
    email: 'mary_AA@yahoo.com',
    password: 'password12345',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
