const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');

const FunFact = sequelize.define('fun_fact', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fun_fact: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = FunFact;