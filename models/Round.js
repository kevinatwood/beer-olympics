const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Round extends Model{}

Round.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }, 
        number:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tournament_id: {
            type: DataTypes.INTEGER,
            allowNull:true,
           defaultValue: null,
            references: {
              model: 'tournament',
              key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'round',
      }
)

module.exports = Round