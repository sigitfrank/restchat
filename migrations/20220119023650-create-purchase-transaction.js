'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('purchase_transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20)
      },
      customer_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20)
      },
      total_spent: {
        type: Sequelize.DECIMAL(10,2)
      },
      total_saving: {
        type: Sequelize.DECIMAL(10,2)
      },
      transaction_at: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('purchase_transactions');
  }
};