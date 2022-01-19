'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer_vouchers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customer_vouchers.init({
    customer_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'customer_vouchers',
  });
  return customer_vouchers;
};