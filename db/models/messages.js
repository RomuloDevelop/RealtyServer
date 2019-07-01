'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    client_id: DataTypes.INTEGER,
    text:  {
      allowNull: false, 
      type: DataTypes.TEXT
    },
    property_id: DataTypes.INTEGER
  }, {});
  Messages.associate = function(models) {
	  Messages.belongsTo(models.Clients);
  };
  return Messages;
};