const router = require('express').Router();
const productRoutes = require('./productRoutes');
const orderRoutes = require('./orderRoutes');
const customerRoutes = require('./customerRoutes');

router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.use('/custonmers', customerRoutes);

module.exports = router;
