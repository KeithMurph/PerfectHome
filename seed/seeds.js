const sequelize = require('../config/connection');
const { User, Project, Adoptable} = require('../models');
const seedPets = require('./petsData');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Adoptable.bulkCreate(seedPets)
  
  process.exit(0);
};

const seedMe = async () => {
    await sequelize.sync({ force: true });
    await db.User.bulkCreate([
      {
        username: "keith",
        email: "keith@keith.keith",
        password: "password"
      },
      {
        username: "Meg",
        email: "Meg@meg.meg",
        password: "password"
      },
      {
        username: "karen",
        email: "karen@karen.karen",
        password: "password"
      },
      {
        username: "connor",
        email: "connor@connor.connor",
        password: "password"
      }
    ]);

seedDatabase();

seedMe();
