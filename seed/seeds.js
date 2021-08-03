const sequelize = require('../config/connection');
const { User, Project } = require('../models');
const seedPets = require('./petsData');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedPets()
  
  process.exit(0);
};

seedDatabase();
