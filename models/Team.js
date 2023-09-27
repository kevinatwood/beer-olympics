const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique: true
    },
    round_one: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    round_two: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    round_three: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }, 
    round_four: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'team',
  }
);

module.exports = Team;
