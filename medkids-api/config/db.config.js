//Login credentials for the database
const { Sequelize} = require('sequelize');

const sequelizeConnection = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Krlos2001",
    DB: "medkidsdb",
    dialect: "postgresql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = {
  sequelize,
  sequelizeConnection
};