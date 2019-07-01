'use strict';
module.exports = (sequelize, DataTypes) => {
  const Agency = sequelize.define('Agency', {
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    phone_1: DataTypes.STRING,
    phone_2: DataTypes.STRING,
    address: DataTypes.STRING,
    email: {
      allowNull: false, 
      unique: true, 
      type: DataTypes.CITEXT
    },
    general_enquiry_email: DataTypes.CITEXT,
    property_enquiry_email: DataTypes.CITEXT,
    legal: DataTypes.TEXT,
    privacy: DataTypes.TEXT,
    logo: DataTypes.BLOB,
    about_picture: DataTypes.BLOB,
    about_picture_text: DataTypes.TEXT,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    legal_es: DataTypes.TEXT,
    privacy_es: DataTypes.TEXT,
    about_picture_text_es: DataTypes.TEXT,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    col1: DataTypes.TEXT,
    col1_es: DataTypes.TEXT,
    col2: DataTypes.TEXT,
    col2_es: DataTypes.TEXT,
    col3: DataTypes.TEXT,
    col3_es: DataTypes.TEXT
    }, {});
    Agency.associate = function(models) {
      Agency.hasMany(models.Agency_Pictures);
      Agency.hasMany(models.Clients);
      Agency.hasMany(models.Social_Networks);
    };
  return Agency;
};