const sequelize = require('../config/db.config');
const Level = require('./level');
const BodySystem = require('./body_system');

const LevelXBodySystem = sequelize.define('level_x_body_system', {});

LevelXBodySystem.belongsTo(Level, {
    foreignKey: 'level_id',
    targetKey: 'id'
});
LevelXBodySystem.belongsTo(BodySystem, {
    foreignKey: 'body_system_id',
    targetKey: 'id'
});

module.exports = LevelXBodySystem;