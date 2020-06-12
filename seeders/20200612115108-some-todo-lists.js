'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      'todoLists',
      [
        {
          name: 'Groceries',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('todoLists', null, {});
  }
};
