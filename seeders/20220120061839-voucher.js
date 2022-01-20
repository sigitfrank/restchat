'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()
    return queryInterface.bulkInsert('vouchers', [{
      status:true,
      last_claimed:null,
      created_at:date,
      updated_at:date
    }]);
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
