'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: {
      allowNull: false,
      defaultValue: '',
      type: DataTypes.STRING
    },
    encrypted_password: {
      allowNull: false,
      defaultValue: '',
      type:DataTypes.STRING
    },
    reset_password_token: DataTypes.STRING,
    reset_password_sent_at: DataTypes.DATE,
    remember_created_at: DataTypes.DATE,
    sign_in_count: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    current_sign_in_at: DataTypes.DATE,
    last_sign_in_at: DataTypes.DATE,
    current_sign_in_ip: DataTypes.INET,
    last_sign_in_ip: DataTypes.INET,
    role: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};