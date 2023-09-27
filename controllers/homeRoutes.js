const router = require('express').Router();
const { Team, User } = require('../models');
const withAuth = require('../utils/auth');

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
    let teamId = null
    if(req.session.user_id) {
    const userData = await User.findByPk(req.session.user_id)
     teamId = userData.get({plain: true}).team_id
     } 
    // Serialize data so the template can read it
    const teamsTempData = teamData.map((team) => team.get({ plain: true }));
    
    const teams = teamsTempData.map((team) => {
      return {
        ...team, 
        isUserTeam: team.id === teamId,
      }
    })
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      teams,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/team/:id', async (req, res) => {
  try {
    const teamData = await Team.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
      ],
    });

    const team = teamData.get({ plain: true });

    res.render('teamProfile', {
      ...team,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/teamPage', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Team }],
    });

    const teamData = await Team.findAll()

    const user = userData.get({ plain: true });
    const teams = teamData.map(data => data.get( {plain:true}))

    res.render('teamPage', {
      ...user,
      logged_in: true, 
      teams,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/teamPage');
    return;
  }

  res.render('login');
});

router.get('/standings', async (req, res) => {
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
    console.log(teams)

    // Pass serialized data and session flag into template
    res.render('standings', { 
      teams, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
