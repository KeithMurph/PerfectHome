const sequelize = require('../config/connection');
const { User, Adoptable} = require('../models');
const Breed = require('../models/Breed');
const seedPets = require('./petsData');
const seedBreeds = require("./breedData")



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Adoptable.bulkCreate(seedPets)

  await Breed.bulkCreate(seedBreeds)
  
  await User.bulkCreate([
    {
      username: "keith",
      email: "keith@keith.keith",
      password: "password",
   
    },
    {
      username: "Meg",
      email: "Meg@meg.meg",
      password: "password",
    
    },
    {
      username: "karen",
      email: "karen@karen.karen",
      password: "password",
      
    },
    {
      username: "connor",
      email: "connor@connor.connor",
      password: "password",
   
    }
  ],
  {
    individualHooks: true,
  }
  );

  process.exit(0);
};



seedDatabase();


