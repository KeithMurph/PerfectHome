const sequelize = require('../config/connection');
const { User, Project, Adoptable} = require('../models');
const seedPets = require('./petsData');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Adoptable.bulkCreate(seedPets)
  
  process.exit(0);
};

seedDatabase();