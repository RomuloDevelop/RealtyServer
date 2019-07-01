'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        defaultValue: '',
        type: Sequelize.STRING
      },
      encrypted_password: {
        allowNull: false,
        defaultValue: '',
        type: Sequelize.STRING
      },
      reset_password_token: {
        type: Sequelize.STRING
      },
      reset_password_sent_at: {
        type: Sequelize.DATE
      },
      remember_created_at: {
        type: Sequelize.DATE
      },
      sign_in_count: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      current_sign_in_at: {
        type: Sequelize.DATE
      },
      last_sign_in_at: {
        type: Sequelize.DATE
      },
      current_sign_in_ip: {
        type: Sequelize.INET
      },
      last_sign_in_ip: {
        type: Sequelize.INET
      },
      role: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      last_name: {
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
    return queryInterface.dropTable('Users');
  }
};