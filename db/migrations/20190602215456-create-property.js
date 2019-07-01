'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT
      },
      bedroom: {
        type: Sequelize.INTEGER
      },
      bath: {
        type: Sequelize.FLOAT
      },
      size: {
        type: Sequelize.INTEGER
      },
      pool: {
        type: Sequelize.BOOLEAN
      },
      foreclosure: {
        type: Sequelize.BOOLEAN
      },
      status: {
        allowNull: false, 
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
      },
      description: {
        type: Sequelize.STRING
      },
      year_built: {
        type: Sequelize.DATE
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
      country: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      description_es: {
        type: Sequelize.TEXT
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      address: {
        type: Sequelize.STRING
      },
      pictures_order: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Properties');
  }
};