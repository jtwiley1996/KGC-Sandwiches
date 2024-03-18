const Order = require('./order');
const Product = require('./product');
const User = require('./user');

Product.belongsToMany(User, {
  through: {
    model: Order,
    unique: false
  },
  as: 'pending_orders'
});

User.belongsToMany(Product, {
  through: {
    model: Order,
    unique: false
  },
  as: 'confirmed_orders'
});

module.exports = { Order, Product, User };


