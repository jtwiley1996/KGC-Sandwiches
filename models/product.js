const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Import sequelize

class Product extends Model {} // Capitalize class name

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize, // Pass sequelize instance
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product'
  }
);

module.exports = Product; // Capitalize module.exports
