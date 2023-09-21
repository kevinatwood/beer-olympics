const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teamRoutes = require('./teamRoutes')

router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
