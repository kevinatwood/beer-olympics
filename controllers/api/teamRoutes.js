const router = require('express').Router();
const { Team, User } = require('../../models/');

router.post('/', async (req, res) => {
  try {
    const newTeam = await Team.create({
      ...req.body,
    });
    const  userId  = req.session.user_id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's team_id
    user.team_id = newTeam.id;

    // Save the updated user in the database
    await user.save();

    res.status(200).json({newTeam, user});
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const teamData = await Team.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!teamData) {
      res.status(404).json({ message: 'No team found with this id!' });
      return;
    }

    res.status(200).json(teamData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
