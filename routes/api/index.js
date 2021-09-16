const router = require('express').Router();
const topicsRoutes = require('./topic-routes');

router.use('/topics', topicsRoutes);

module.exports = router;