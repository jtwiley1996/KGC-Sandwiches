const router = require('express').Router();

const productRoutes = require('./product-routes');
const orderRoutes = require('./order-routes');
const customerRoutes = require('./customer-routes');

router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.use('/customers', customerRoutes);

module.exports = router;
