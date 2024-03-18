const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, Customer, Product, Order, OrderProduct } = require('../models');

// route to homepage view
router.get('/', (req, res) => {
    Review.findAll({
        attributes: [
            'id',
            'review_text',
            'created_at'
        ],
        include: [
            {
                model: Customer,
                attributes: ['first_name']
            }
        ]
    })
        .then(reviewData => {
            const reviews = reviewData.map(review => review.get({ plain: true }));

            res.render('homepage', {
                reviews,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// route to login view
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// route to register view
router.get('/register', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('register');
});

// route to menu view
router.get('/menu', (req, res) => {
    res.render('menu', {
        loggedIn: req.session.loggedIn
    });
});

// route to pizza menu view
router.get('/pizza', (req, res) => {
    res.render('pizza', {
        loggedIn: req.session.loggedIn
    });
});

// route to pie menu view
router.get('/pie', (req, res) => {
    res.render('pie', {
        loggedIn: req.session.loggedIn
    });
});

// route to homepage view
router.get('/review-order', (req, res) => {
    Order.findAll({
        limit: 1,
        where: {
            customer_id: req.session.customer_id
        },
        order: [['createdAt', 'DESC']],
        attributes: [
            'id',
            'total',
            'order_status',
            'created_at',
            //[sequelize.fn('sum', sequelize.col('price')), 'total_cost']
        ],
        include: [
            {
                model: Product,
                attributes: [
                    'id',
                    'product_name',
                    'price',
                    // [sequelize.fn('sum', sequelize.col('price')), 'total_cost']
                ],
                through: OrderProduct,
            },
            {
                model: Customer,
                attributes: { exclude: ['password'] }
            }
        ]
    })
        .then(orderData => {
            const orders = orderData.map(order => order.get({ plain: true }));

            res.render('review-order', {
                orders,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;