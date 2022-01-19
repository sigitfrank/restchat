const casual = require('casual')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const genders = ['male','female']
    const customers = []
    for (let index = 0; index < 20; index++) {
      const date = new Date()            
      const firstName = casual.first_name
      customers.push({
        first_name: firstName,
        last_name: casual.last_name,
        gender: genders[Math.floor(Math.random() * genders.length)],
        email: `${firstName}@gmail.com`,
        date_of_birth: casual.date(format = 'YYYY-MM-DD'),
        contact_number: casual.phone,
        created_at: date,
        updated_at: date
      })
    }
    return queryInterface.bulkInsert('customers', customers);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};