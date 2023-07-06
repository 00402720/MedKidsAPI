//Login credentials for the database
const { Sequelize} = require('sequelize');

const sequelize = new Sequelize('medkidsdb', 'medkids_admin01', '_8fraG!wrlga#hadred?', {
    host: 'db',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

module.exports = sequelize;