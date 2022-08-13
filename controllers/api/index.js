const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./post-Routes'); 
const commentRoutes = require('./comment-routes');
const seedRoutes = require('./seed-routes'); 

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/post', commentRoutes);
router.use('/seed', seedRoutes);

module.exports = router;
