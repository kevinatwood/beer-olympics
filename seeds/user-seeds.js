const { User } = require('../models');

const userData = [
    {
      "name": "Sal",
      "email": "sal@hotmail.com",
      "password": "password12345",
      "team_id" : 1
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "password12345",
      "team_id" : 1
    },
    {
      "name": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "password12345",
      "team_id" : 2
    },
    {
        "name": "Minna",
        "email": "minna@aol.com",
        "password": "password12345",
        "team_id" : 2
      },
      {
        "name": "Kevin",
        "email": "kevin@aol.com",
        "password": "password12345",
        "team_id" : 3
      },
      {
        "name": "Dan",
        "email": "dan@aol.com",
        "password": "password12345",
        "team_id" : 3
      },
      {
        "name": "Topper",
        "email": "topper@aol.com",
        "password": "password12345",
        "team_id" : 4
      },
      {
        "name": "Margi",
        "email": "margi@aol.com",
        "password": "password12345",
        "team_id" : 4
      },
      {
        "name": "Walter",
        "email": "Walter@hotmail.com",
        "password": "password12345",
        "team_id" : 5
      },
      {
        "name": "Luke",
        "email": "luke@gmail.com",
        "password": "password12345",
        "team_id" : 5
      },
      {
        "name": "Mark",
        "email": "mark@aol.com",
        "password": "password12345",
        "team_id" : 6
      },
      {
          "name": "Lewis",
          "email": "lewis@aol.com",
          "password": "password12345",
          "team_id" : 6
        },
        {
          "name": "Chris",
          "email": "chris@aol.com",
          "password": "password12345",
          "team_id" : 7
        },
        {
          "name": "kelsey",
          "email": "kelsey@aol.com",
          "password": "password12345",
          "team_id" : 7
        },
        {
          "name": "Hannah",
          "email": "hannah@aol.com",
          "password": "password12345",
          "team_id" : 8
        },
        {
          "name": "Randolph",
          "email": "dolph@aol.com",
          "password": "password12345",
          "team_id" : 8
        },
  ]
  
  const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;