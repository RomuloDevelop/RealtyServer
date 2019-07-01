'use strict';
module.exports = (sequelize, DataTypes) => {
  const Agency_Pictures = sequelize.define('Agency_Pictures', {
    image: {
      allowNull: false,
      type: DataTypes.BLOB
    },
    text: DataTypes.TEXT,
    text_es: DataTypes.TEXT
  }, {});
  Agency_Pictures.associate = function(models) {
    Agency_Pictures.belongsTo(models.Agency)
  };
  return Agency_Pictures;
};