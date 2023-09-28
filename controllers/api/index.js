const router = require('express').Router();
const userRoutes = require('./userRoutes');

const teamRoutes = require('./teamRoutes')
const standingsRoutes = require('./standingsRoutes')


router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
router.use('/standings', standingsRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
