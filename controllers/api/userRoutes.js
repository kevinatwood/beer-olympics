const router = require('express').Router();
const { User } = require('../../models');
const { findAll } = require('../../models/User');
const nodemailer = require("nodemailer");
const appPassword = 'gzqt egic xbvy ddse'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "beerolympics063@gmail.com",
    pass: appPassword,
  },
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.log(req, userData)
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Beer Olympics" <beerolympics063@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: `Welcome To The Beer Olympics, ${req.body.name}!`, // Subject line
        // text: , // plain text body
        html: `<p>Hello ${req.body.name}!</p><br><p>It is our pleasure to welcome you to the games of this year's Beer Olympiad. Details of the event to follow. Cheers!</p><br><p>Your Beer Olympics Planning Committee</p>`, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      //
      // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
      //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
      //       <https://github.com/forwardemail/preview-email>
      //
    }
    
    main().catch(console.error);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
    //todo: error handling- must be unique email, password longer than 8 chars, etc
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email , please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect  password, please try again' });
      return;
    }
  

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// join a team
router.put('/addteam/:team_id', async (req, res) => {
  try {
    const  userId  = req.session.user_id;
    const { team_id } = req.params;

    if (team_id){
      const allUsers = await User.findAndCountAll({ where: {team_id} })
      console.log(allUsers)
      if (allUsers.count >= 2){
        return res.status(400).json({ message: "This team is already full!"})
      }
    }

    // Find the user by ID in the database
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's team_id
    user.team_id = team_id;

    // Save the updated user in the database
    await user.save();

    res.json({ message: 'User updated successfully', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});



module.exports = router;
