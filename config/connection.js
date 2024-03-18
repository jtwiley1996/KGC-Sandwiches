import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

let sequelize;

if (process.env.JAWSDB_URL) {
    // If using JawsDB (Heroku MySQL add-on)
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // If using local MySQL database
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: process.env.DB_HOST || 'localhost', // Added default value for host
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306, // Added default value for port
        dialectOptions: {
            // Additional options specific to your database dialect
            // For example:
            // charset: 'utf8mb4',
            // collate: 'utf8mb4_unicode_ci'
        },
        pool: {
            // Connection pool configuration
            max: 5, // Maximum number of connections in the pool
            min: 0, // Minimum number of connections in the pool
            acquire: 30000, // Maximum time, in milliseconds, that pool will try to get connection before throwing error
            idle: 10000 // Maximum time, in milliseconds, that a connection can be idle before being released
        }
    });
}

export default sequelize;
