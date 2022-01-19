'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const customerIds = [1,2,2,2,2,3,4,5,6,7,7,7,8,8,9,10]
    const transactions = []
    customerIds.forEach(customerId=>{
      const date = new Date()            
      transactions.push({
        customer_id: customerId,
        total_spent: 100,
        total_saving: 25,
        transaction_at: date,
        created_at: new Date(),
        updated_at: date
      })
    })
    return queryInterface.bulkInsert('purchase_transactions', transactions);

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('purchase_transactions', null, {});
  }
};
