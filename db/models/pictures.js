'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pictures = sequelize.define('Pictures', {
    image: {
      allowNull: false,
      type: DataTypes.BLOB
    },
    file_name: DataTypes.STRING,
    file_size: DataTypes.INTEGER,
    thumb: DataTypes.BLOB
  }, {});
  Pictures.associate = function(models) {
    Pictures.belongsTo(models.Property)
  };
  return Pictures;
};