'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('commands', [
      {
        pattern: 'inn',
        command: 'inn.latest',
        priority: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}).catch(function (err) {
          console.error(err.message);
          throw err;
        });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('commands', [
      {
        command:'inn.latest',
      },
    ], {});
  },
};
