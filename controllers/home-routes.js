const router = require('express').Router();
const { User, Product, Order, } = require('../models');

// Route to homepage view
router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            attributes: ['id', 'product_name'],
        });
        
        const products = productData.map(product => product.get({ plain: true }));
        
        res.render('home', {
            products,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.error(err);
        res.status(500).render('error', { message: 'Internal Server Error' });
    }
});

// Route to login view
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
    } else {
        res.render('login');
    }
});

// Route to register view
router.get('/register', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
    } else {
        res.render('register');
    }
});

// Route to menu view
router.get('/menu', (req, res) => {
    res.render('menu', {
        loggedIn: req.session.loggedIn
    });
});

// Route to sandwich menu view
router.get('/sandwich', (req, res) => {
    res.render('sandwich', {
        loggedIn: req.session.loggedIn
    });
});

// Route to drink menu view
router.get('/drinks', (req, res) => {
    res.render('drinks', {
        loggedIn: req.session.loggedIn
    });
});

// Route to review order view
router.get('/review-order', async (req, res) => {
    try {
        const orderData = await Order.findAll({
            limit: 1,
            where: {
                customer_id: req.session.customer_id
            },
            order: [['createdAt', 'DESC']],
            attributes: ['id', 'total', 'order_status', 'created_at'],
            include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price'],
                through: OrderProduct
            }, {
                model: Customer,
                attributes: { exclude: ['password'] }
            }]
        });

        const orders = orderData.map(order => order.get({ plain: true }));

        res.render('review-order', {
            orders,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.error(err);
        res.status(500).render('error', { message: 'Internal Server Error' });
    }
});

module.exports = router;
