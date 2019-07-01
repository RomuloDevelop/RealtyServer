'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    price: DataTypes.FLOAT,
    bedroom: DataTypes.INTEGER,
    bath: DataTypes.FLOAT,
    size: DataTypes.INTEGER,
    pool: DataTypes.BOOLEAN,
    foreclosure: DataTypes.BOOLEAN,
    status: {
      allowNull: false, 
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    },
    description: DataTypes.STRING,
    year_built: DataTypes.DATE,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    description_es: DataTypes.TEXT,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    address: DataTypes.STRING,
    pictures_order: DataTypes.STRING
  }, {});
  Property.associate = function(models) {
    Property.belongsTo(models.Property_Types,{ foreignKey: 'property_type_id' });
	  Property.hasMany(models.Pictures);
  };
  return Property;
};