const router = require('express').Router();
const reactionsRoutes = require('./api/reactions');
const thoughtsRoutes = require('./api/thoughts');
const usersRoutes = require('./api/users');


router.use('/reactions', reactionsRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
