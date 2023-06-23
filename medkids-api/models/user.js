const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');
const ProfilePicture = require('../models/profile_picture');
const Rank = require('../models/rank');

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false,
    default: 0
  }
});

  //Foreign keys
User.belongsTo(ProfilePicture, {
  foreignKey: 'profile_picture_id',
  targetKey: 'id'
});

User.belongsTo(Rank, {
  foreignKey: 'rank_id',
  targetKey: 'id'
});

module.exports = User;