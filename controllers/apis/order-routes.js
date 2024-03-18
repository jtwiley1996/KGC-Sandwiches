const router = require('express').Router();
const { order } = require('../../models');

// CREATE an order
router.post('/', async (req, res) => {
  try {
    const orderData = await order.create(req.body);
    res.status(200).json(orderData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const orderData = await order.destroy({
      where: { id: req.params.id }
    });
    if (!orderData) {
      res.status(404).json({ message: 'No order with this id!' });
      return;
    }
    res.status(200).json(orderData); // Removed space after .json
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;

