const router = require('express').Router();
const { Review, Customer, Product, Order, OrderProduct } = require('../models');

// Route to homepage view
router.get('/', async (req, res) => {
    try {
        const reviewData = await Review.findAll({
            attributes: ['id', 'review_text', 'created_at'],
            include: [{
                model: Customer,
                attributes: ['first_name']
            }]
        });
        
        const reviews = reviewData.map(review => review.get({ plain: true }));
        
        res.render('home', {
            reviews,
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

// Route to pizza menu view
router.get('/pizza', (req, res) => {
    res.render('pizza', {
        loggedIn: req.session.loggedIn
    });
});

// Route to pie menu view
router.get('/pie', (req, res) => {
    res.render('pie', {
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
