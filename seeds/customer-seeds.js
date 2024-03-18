const { Customer } = require('../models');

const seedCustomers = async () => {
  try {
    const customerData = [
      {
        email: 'john@example.com',
        password: 'password123',
        first_name: 'John',
        last_name: 'Doe',
        street_address: '123 Main St',
        city_address: 'Anytown',
        state_address: 'CA',
        zip_address: 12345
      },
      {
        email: 'jane@example.com',
        password: 'password456',
        first_name: 'Jane',
        last_name: 'Smith',
        street_address: '456 Elm St',
        city_address: 'Othertown',
        state_address: 'NY',
        zip_address: 54321
      },
      {
        email: 'another@example.com',
        password: 'test1234',
        first_name: 'Another',
        last_name: 'Customer',
        street_address: '1010 Example Blvd',
        city_address: 'Somewhere',
        state_address: 'CA', 
        zip_address: 54321, 
      }

    ];

    await Customer.bulkCreate(customerData);

    console.log('Customers seeded successfully');
  } catch (error) {
    console.error('Error seeding customers:', error);
  }
};

seedCustomers(); 

