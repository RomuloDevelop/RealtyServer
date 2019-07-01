'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.addColumn('Properties', 'property_type_id', {
      type: Sequelize.INTEGER,
      defaultValue: 1,
      allowNull: false,
      onUpdate: 'cascade',
      onDelete: 'restrict'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Properties', 'property_type_id');
  }
};
