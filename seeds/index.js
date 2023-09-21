const sequelize = require('../config/connection');
const { User, Team } = require('../models');

const userData = require('./user-seeds.json');
const teamData = require('./team-seeds.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Team.bulkCreate(teamData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();