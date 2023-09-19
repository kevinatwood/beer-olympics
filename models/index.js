const User = require('./User');
const Team = require('./Team')

Team.hasMany(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})


User.belongsTo(Team, {
  foreignKey: 'user_id'
});

module.exports = { User, Team };
