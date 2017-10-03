const express = require('express');
const authRoutes = require('./auth');
const router = express.Router();

/* GET home page. */
// router.get('/', (req, res, next) => {
//   res.render('index');
// });

// router.use('/api', authRoutes);

module.exports = router;
