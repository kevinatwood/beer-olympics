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
      allowNull: true,
    },
    round_two: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    round_three: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }, 
    round_four: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'team',
  }
);

module.exports = Team;
