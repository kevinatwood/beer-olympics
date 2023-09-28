const router = require('express').Router();
const { Team, User, Tournament, Round, Game } = require('../../models');

router.post('/round', async (req, res) => {
    try {
      const standingsUpdate = await Standings.update({
        ...req.body,
      });
  console.log(standingsUpdate)
      res.status(200).json(standingsUpdate);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });


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
          const tournamentData = await Tournament.findAll({
            include: [
              {
                model: Round,
                attributes: ['number']
              },
            ],
          });
          const roundData = await Round.findAll({
            include: [
              {
                model: Game,
                attributes: ['team_one', 'team_two', 'winner'],
              },
              {
                model: Team,
                attributes: ['team_name'],
              },
            ],
          });
      res.json({teamData,tournamentData, roundData})
} catch (err) {
    res.status(500).json(err);
  }
  })

//route to clear assigned numbers

module.exports = router;