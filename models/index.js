

const User = require('./User');
const Team = require('./Team');
const Round = require('./Round');
const Tournament = require('./Tournament');
const Game = require('./Game');

Team.hasMany(User, {
  foreignKey: 'team_id',
});

User.belongsTo(Team, {
  foreignKey: 'team_id',
});

Tournament.hasMany(Round, {
  foreignKey: 'tournament_id',
});

Round.belongsTo(Tournament, {
  foreignKey: 'tournament_id',
});

Round.hasMany(Game, {
  foreignKey: 'round_id',
});

Game.belongsTo(Round, {
  foreignKey: 'round_id',
});

Team.belongsToMany(Round, {
  through: { model: Game },
});

Round.belongsToMany(Team, {
  through: { model: Game },
});

module.exports = { User, Team, Round, Tournament, Game };