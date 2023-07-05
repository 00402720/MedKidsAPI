//Login credentials for the database
const { Sequelize} = require('sequelize');

<<<<<<< Updated upstream
const sequelize = new Sequelize('medkidsdb', 'medkids_admin01', '_8fraG!wrlga#hadred?', {
    host: 'db',
=======
const sequelize = new Sequelize('medkidsdb', 'postgres', 'root', {
    host: 'localhost',
>>>>>>> Stashed changes
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

module.exports = sequelize;