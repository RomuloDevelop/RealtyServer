'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define('Clients', {
    name:  {
      allowNull: false,
      type: DataTypes.STRING
    },
    email:  {
      allowNull: false, 
      unique: true, 
      type: DataTypes.CITEXT
    },
    phone: DataTypes.STRING,
    country: DataTypes.STRING,
    agency_id: DataTypes.INTEGER
  }, {});
  Clients.associate = function(models) {
    Clients.belongsTo(models.Agency);
	  Clients.hasMany(models.Messages);
  };
  return Clients;
};