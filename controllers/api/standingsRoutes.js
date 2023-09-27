const router = require('express').Router();
const { Standings, User } = require('../../models');

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



//route to clear assigned numbers

module.exports = router;