const router = require('express').Router();

// Import your API routes
const productRoutes = require('./product-routes');
const orderRoutes = require('./order-routes');
const customerRoutes = require('./customer-routes');

// Register your API routes
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.use('/customers', customerRoutes);

module.exports = router;

