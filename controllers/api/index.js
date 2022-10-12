const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ProductRoutes = require('./ProductRoutes');
const messageRoutes = require('./messageRoutes');

router.use('/users', userRoutes);
//router.use('/prodcuts', ProductRoutes);
router.use('/messages', messageRoutes);

module.exports = router;
