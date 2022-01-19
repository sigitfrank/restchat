'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchase_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  purchase_transaction.init({
    customer_id: DataTypes.BIGINT,
    total_spent: DataTypes.DECIMAL,
    total_saving: DataTypes.DECIMAL,
    transaction_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'purchase_transaction',
  });
  return purchase_transaction;
};