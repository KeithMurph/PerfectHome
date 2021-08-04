const sequelize = require('../config/connection');
const { User, Project, Adoptable} = require('../models');
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
      zipcode: "98077"
    },
    {
      username: "Meg",
      email: "Meg@meg.meg",
      password: "password",
      zipcode: "98077"
    },
    {
      username: "karen",
      email: "karen@karen.karen",
      password: "password",
      zipcode: "98077"
    },
    {
      username: "connor",
      email: "connor@connor.connor",
      password: "password",
      zipcode: "98077"
    }
  ]);

  process.exit(0);
};



seedDatabase();


