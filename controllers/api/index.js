const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const messageRoutes = require('./messageRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/messages', messageRoutes);

module.exports = router;
