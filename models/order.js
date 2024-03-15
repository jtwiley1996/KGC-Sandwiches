const { Model, DataTypes } = require('sequelize');


class order extends Model {}

order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false
      }
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'order',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order'
  }
);

module.exports = order;
