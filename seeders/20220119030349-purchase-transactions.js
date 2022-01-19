'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const transactions = [
      {
        customer_id:1,
        total_spent:25,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:2,
        total_spent:35,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:2,
        total_spent:25,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:2,
        total_spent:50,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:3,
        total_spent:5,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:4,
        total_spent:25,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:5,
        total_spent:15,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:6,
        total_spent:25,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:7,
        total_spent:35,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:7,
        total_spent:35,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:7,
        total_spent:30,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:8,
        total_spent:25,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:9,
        total_spent:25,
        total_saving:20,
        transaction_at:new Date()
      },
      {
        customer_id:10,
        total_spent:45,
        total_saving:20,
        transaction_at:new Date()
      },
    ]
    return queryInterface.bulkInsert('purchase_transactions', transactions);

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('purchase_transactions', null, {});
  }
};
