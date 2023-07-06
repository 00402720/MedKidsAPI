const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
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
    allowNull: true,
    default: 0
  },
  profile_picture: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

//Foreign Key
User.belongsTo(Rank, {
  foreignKey: 'rank_id',
  targetKey: 'id'
});

module.exports = User;