const router = require('express').Router();
const topicsRoutes = require('./topic-routes');
const userRoutes = require('./user-routes');
const voteRoutes = require('./votes-routes');

router.use('/topics', topicsRoutes);
router.use('/users', userRoutes);
router.use('/votes', voteRoutes);

module.exports = router;