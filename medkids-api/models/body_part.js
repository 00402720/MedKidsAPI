const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');
const BodySystem = require('./body_system');

const BodyPart = sequelize.define('body_part', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.BLOB,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

BodyPart.belongsTo(BodySystem, {
    foreignKey: 'body_system_id',
    targetKey: 'id'
});

module.exports = BodyPart;