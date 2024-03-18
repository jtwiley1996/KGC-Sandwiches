const { Order } = require('../models');

const orderData = [
  {
    total: 50.25,
    order_status: 'Completed!',
    customer_id: 1,
  },
  {
    total: 40.75,
    order_status: 'Workin on it!',
    customer_id: 2,
  },
  {
    total: 60.50,
    order_status: 'Received!',
    customer_id: 3,
  },
];

const seedOrder = () => Order.bulkCreate(orderData);

module.exports = seedOrder;
