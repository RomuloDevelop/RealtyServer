'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:  {
        allowNull: false,
        type: Sequelize.STRING
      },
      email:  {
        allowNull: false, 
        unique: true, 
        type: Sequelize.CITEXT
      },
      agency_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Agencies',
          key: 'id'
        }
      },
      phone: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Clients');
  }
};