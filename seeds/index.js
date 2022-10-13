const sequelize = require('../config/connection');
const { User, Product } = require('../models');
const seedProducts = require('./productData');
const seedProduct = require('./productData');
const seedUsers = require('./userData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProducts();

  await seedUsers();

  process.exit(0);
};

seedAll();
