const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tournament extends Model {}

Tournament.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
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
        number_of_rounds: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tournament',
      }
)

module.exports= Tournament