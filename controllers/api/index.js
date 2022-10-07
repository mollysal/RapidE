const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ProductRoutes = require('./ProductRoutes');

router.use('/users', userRoutes);
router.use('/prodcuts', ProductRoutes);

module.exports = router;
