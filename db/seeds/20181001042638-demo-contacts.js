'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Contacts', [
        {
          name: 'Jason',
          phone: '415-123-4567',
          email: 'jason@jason.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jessica',
          phone: '415-400-3020',
          email: 'jessica@jess.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fruit',
          phone: '504-340-2030',
          email: 'fruit@fruit.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Bloo',
          phone: '392-304-4938',
          email: 'bloo@foo.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Contacts', null, {});
  }
};
