const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const bodySystem = require('./body_system');

const Insignia = sequelize.define('insignia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.BLOB,
    allowNull: false
  }
});

Insignia.belongsTo(bodySystem, {
    foreignKey: 'body_system_id',
    targetKey: 'id'
});

module.exports = Insignia;