const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');

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
  section_image: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  puzzle_image: {
    type: DataTypes.BLOB,
    allowNull: true
  }
});

module.exports = BodySystem;