// Import necessary modules
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';
import bcrypt from 'bcrypt';

// Define User model
class User extends Model {
  // Method to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Define table columns and configuration
User.init(
  // Table column definitions
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8] // Password must be at least 8 characters long
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street_address2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_address: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
  },

  {
    // Hooks for password hashing
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    // Table configurations
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user' // Changed modelName from 'customer' to 'user' for consistency
  }
);

// Export User model
export default User;