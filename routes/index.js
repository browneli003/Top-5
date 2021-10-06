const router = require('express').Router();
const homeRoutes = require('./home-routes');
const nodemailer = require('./nodemailer');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/', nodemailer);

router.use((req, res) => {
  res.status(404).end();
});
module.exports = router;