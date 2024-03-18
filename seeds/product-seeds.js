const productData = [
    {
      product_name: 'Ham Sandwich',
      price: 6.99,
    },
    {
      product_name: 'Turkey Sandwich',
      price: 7.99,
    },
    {
      product_name: 'BLT Sandwich',
      price: 8.99,
    },
    {
      product_name: 'Grilled Cheese Sandwich',
      price: 5.99,
    },
    {
      product_name: 'Chicken Salad Sandwich',
      price: 7.49,
    },
    {
      product_name: 'Roast Beef Sandwich',
      price: 8.49,
    },
    {
      product_name: 'Vegetarian Sandwich',
      price: 6.99,
    },
    {
      product_name: 'Tuna Salad Sandwich',
      price: 7.49,
    },
    {
      product_name: 'Club Sandwich',
      price: 9.99,
    },
    {
      product_name: 'Egg Salad Sandwich',
      price: 6.49,
    },
  ];
  
  const seedProducts = () => Product.bulkCreate(productData);
  
  module.exports = seedProducts;
  