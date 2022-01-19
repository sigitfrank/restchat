'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const transactions = [
      {
        name:'T-Shirt',
        price:25,
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        name:'E-Book',
        price:50,
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        name:'Laptop',
        price:75,
        created_at:new Date(),
        updated_at:new Date()
      },

    ]
    return queryInterface.bulkInsert('products', transactions);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
