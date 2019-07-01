'use strict';
module.exports = (sequelize, DataTypes) => {
  const Property_Types = sequelize.define('Property_Types', {
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    }
  }, {});
  Property_Types.associate = function(models) {
    // associations can be defined here
  };
  return Property_Types;
};