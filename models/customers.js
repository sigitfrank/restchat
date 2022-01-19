'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  customers.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    contact_number: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customers',
  });
  return customers;
};