const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Standings extends Model {}

Standings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    round_one_1: {
      type: DataTypes.STRING,

    },
    round_one_2: {
      type: DataTypes.STRING,
    
    },
    round_one_3: {
      type: DataTypes.STRING,
    
    }, 
    round_one_4: {
      type: DataTypes.STRING,
    
    },
    round_two_1: {
        type: DataTypes.STRING,
      
      },
      round_two_2: {
        type: DataTypes.STRING,
       
      },
      round_three: {
        type: DataTypes.STRING,
       
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'standings',
  }
);

module.exports = Standings;
