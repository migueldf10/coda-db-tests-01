'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Buy Milk",
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Feed the cat",
          deadline: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("todoItems", null, {});
  }
};
