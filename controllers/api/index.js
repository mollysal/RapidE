const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const messageRoutes = require('./messageRoutes');
const buyNowRoutes = require('./buyNowRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/messages', messageRoutes);
router.use('./buyNow', buyNowRoutes);

module.exports = router;
