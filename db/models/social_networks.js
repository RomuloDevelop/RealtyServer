'use strict';
module.exports = (sequelize, DataTypes) => {
  const Social_Networks = sequelize.define('Social_Networks', {
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.ENUM(['adn', 'bitbucket', 'dropbox', 'facebook', 'flickr', 'foursquare', 'github', 'google', 'google_plus', 'instagram', 'linkedin', 'microsoft',
      'odnoklassniki', 'openid', 'pinterest', 'reddit', 'soundcloud', 'tumblr', 'twitter', 'vimeo', 'vk', 'yahoo'])
    },
    address:  {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Social_Networks.associate = function(models) {
    Social_Networks.belongsTo(models.Agency)
  };
  return Social_Networks;
};