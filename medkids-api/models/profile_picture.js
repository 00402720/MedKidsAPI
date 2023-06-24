const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const ProfilePicture = sequelize.define('profile_picture', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  profile_picture: {
    type: DataTypes.BLOB,
    allowNull: false
  }
});

module.exports = ProfilePicture;