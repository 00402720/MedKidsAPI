const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Rank = sequelize.define('rank', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rank: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Rank;