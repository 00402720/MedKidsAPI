const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const BodySystem = sequelize.define('body_system', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body_parts_count: {
    type: DataTypes.INTEGER,
  }
});

module.exports = BodySystem;