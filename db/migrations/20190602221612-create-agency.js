'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Agencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      phone_1: {
        type: Sequelize.STRING
      },
      phone_2: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false, 
        unique: true, 
        type: Sequelize.CITEXT
      },
      general_enquiry_email: {
        type: Sequelize.CITEXT
      },
      property_enquiry_email: {
        type: Sequelize.CITEXT
      },
      legal: {
        type: Sequelize.TEXT
      },
      privacy: {
        type: Sequelize.TEXT
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
      logo: {
        type: Sequelize.BLOB
      },
      about_picture: {
        type: Sequelize.BLOB
      },
      about_picture_text: {
        type: Sequelize.TEXT
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
      legal_es: {
        type: Sequelize.TEXT
      },
      privacy_es: {
        type: Sequelize.TEXT
      },
      about_picture_text_es: {
        type: Sequelize.TEXT
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      col1: {
        type: Sequelize.TEXT
      },
      col1_es: {
        type: Sequelize.TEXT
      },
      col2: {
        type: Sequelize.TEXT
      },
      col2_es: {
        type: Sequelize.TEXT
      },
      col3: {
        type: Sequelize.TEXT
      },
      col3_es: {
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Agencies');
  }
};