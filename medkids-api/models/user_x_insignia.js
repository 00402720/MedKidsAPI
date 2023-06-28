const sequelize = require('../config/db.config');
const User = require('./user');
const Insignia = require('./insignia');

const UserXInsignia = sequelize.define('fun_fact', {});

UserXInsignia.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id'
});
UserXInsignia.belongsTo(Insignia, {
    foreignKey: 'insignia_id',
    targetKey: 'id'
});

module.exports = UserXInsignia;