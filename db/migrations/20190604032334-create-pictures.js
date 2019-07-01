'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pictures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      property_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Properties',
          key: 'id'
        }
      },
      image: {
        allowNull: false,
        type: Sequelize.BLOB
      },
      file_name: {
        type: Sequelize.STRING
      },
      file_size: {
        type: Sequelize.INTEGER
      },
      thumb: {
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pictures');
  }
};