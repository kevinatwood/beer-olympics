const sequelize = require('../config/connection');
const { User, Team, Tournament, Round, Game } = require('../models');

const userData = require('./user-seeds.json');
const teamData = require('./team-seeds.json');
const tournamentData = require('./tournament-seeds.json');
const roundData = require('./round-seeds.json');
const gameData = require('./game-seeds.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Team.bulkCreate(teamData, {
    individualHooks: true,
    returning: true,
  });

  await Tournament.bulkCreate(tournamentData, {
    individualHooks: true,
    returning: true,
  });
  await Round.bulkCreate(roundData, {
    individualHooks: true,
    returning: true,
  });
  await Game.bulkCreate(gameData, {
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