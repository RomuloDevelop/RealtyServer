'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Agency_Pictures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agency_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Agencies',
          key: 'id'
        },
      },
      image: {
        allowNull: false,
        type: Sequelize.BLOB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      text: {
        type: Sequelize.TEXT
      },
      text_es: {
        type: Sequelize.TEXT
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Agency_Pictures');
  }
};