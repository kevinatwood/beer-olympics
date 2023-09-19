const User = require('./User');
const Team = require('./Team')

Team.hasMany(User, {
  foreignKey: 'team_id',
  onDelete: 'CASCADE'
})


User.belongsTo(Team, {
  foreignKey: 'team_id'
});

module.exports = { User, Team };
