const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Level = sequelize. define('level', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  difficulty: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  body_parts_count: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
});

module.exports = Level;