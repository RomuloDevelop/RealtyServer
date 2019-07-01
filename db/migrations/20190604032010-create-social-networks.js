'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Social_Networks', {
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
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.ENUM(['adn', 'bitbucket', 'dropbox', 'facebook', 'flickr', 'foursquare', 'github', 'google', 'google_plus', 'instagram', 'linkedin', 'microsoft',
        'odnoklassniki', 'openid', 'pinterest', 'reddit', 'soundcloud', 'tumblr', 'twitter', 'vimeo', 'vk', 'yahoo'])
      },
      address:  {
        allowNull: false,
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
    return queryInterface.dropTable('Social_Networks');
  }
};