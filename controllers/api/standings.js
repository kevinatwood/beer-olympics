const router = require('express').Router();
const { Team, User } = require('../../models');


router.get('/', async (req, res) => {
    try {
      // Get all teams and JOIN with user data
      const teamData = await Team.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const teams = teamData.map((team) => team.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('standings', { 
        teams, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

//route for updating game numbers



//route to clear assigned numbers

module.exports = router