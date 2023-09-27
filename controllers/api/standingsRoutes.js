const router = require('express').Router();
const { Team, User } = require('../../models');




//route for updating game numbers
router.put('/', async (req, res) => {
    try {
      const teamId = req.body.id
      const roundOne = req.body.round_one
      const roundTwo = req.body.round_two
      const roundThree = req.body.round_three
      const roundFour = req.body.round_four
  
      if (teamId){
        const team = await Team.findByPk(teamId)
        // console.log(team)
        if (roundOne){
            team.round_one = roundOne
        }
        if (roundTwo){
            team.round_two = roundTwo
        }
        if (roundThree){
            team.round_three = roundThree
        }
        if (roundFour){
            team.round_four = roundFour
        }
        await team.save();
        res.json({ message: 'team updated successfully', team });
      }
  
      if (!teamId) {
         return res.status(404).json({ message: 'Team not found' });
      }

     } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
     }
  });

  router.get('/', async (req, res) => {
    try{
    const teamData = await Team.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
      res.json(teamData)
} catch (err) {
    res.status(500).json(err);
  }
  })

//route to clear assigned numbers

module.exports = router