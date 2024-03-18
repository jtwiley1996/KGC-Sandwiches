-- Drop the database if it exists
DROP DATABASE IF EXISTS kgc_sandwiches_db;

-- Create the database
CREATE DATABASE kgc_sandwiches_db;

-- Switch to the created database
USE kgc_sandwiches_db;

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date and time when the customer was added
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Date and time of the last update
);
