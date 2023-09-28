const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        team_one: {
            type: DataTypes.INTEGER,
            allowNull:true,
           defaultValue: null,
            references: {
              model: 'team',
              key: 'id',
            },
          },
          team_two: {
            type: DataTypes.INTEGER,
            allowNull:true,
           defaultValue: null,
            references: {
              model: 'team',
              key: 'id',
            },
          },
        winner: {
            type: DataTypes.INTEGER,
            allowNull:true,
           defaultValue: null,
            references: {
              model: 'team',
              key: 'id',
            },
        }, 
        round_id: {
            type: DataTypes.INTEGER,
            allowNull:true,
           defaultValue: null,
            references: {
              model: 'round',
              key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
      }
)

module.exports = Game