'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Property_Types', [
      {name: 'house'},
      {name: 'apartment'},
      {name: 'condominium'}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Property_Types', null, {});
  }
};
