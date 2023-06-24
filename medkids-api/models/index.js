const sequelize = require("../config/db.config");

const Sequelize = require("sequelize");

//All models
const funFactModel = require("./fun_fact");
const rankModel = require('./rank');
const profilePictureModel = require('./profile_picture');
const userModel = require('./user');
const levelModel = require('./level');
const bodySystemModel = require('./body_system');
const insigniaModel = require('./insignia');
const bodyPartModel = require('./body_part');
const levelXBodySystemModel = require('./level_x_body_system');
const userXInsigniaModel = require('./user_x_insignia');

//Connection to PostgreSQL Database based on the db.config fill

const db = {};

db.Sequelize = Sequelize;  // Sequalize library
db.sequelize = sequelize; //Database connection credentials

//All database tables
db.funFact = new funFactModel(sequelize, Sequelize);
db.rank = new rankModel(sequelize, Sequelize);
db.profilePicture = new profilePictureModel(sequelize, Sequelize);
db.user = new userModel(sequelize, Sequelize);
db.level = new levelModel(sequelize, Sequelize);
db.bodySystem = new bodySystemModel(sequelize, Sequelize);
db.insignia = new insigniaModel(sequelize, Sequelize);
db.bodyPart = new bodyPartModel(sequelize, Sequelize);
db.levelXBodySystem = new levelXBodySystemModel(sequelize, Sequelize);
db.userXInsignia = new userXInsigniaModel(sequelize, Sequelize);

module.exports = db;