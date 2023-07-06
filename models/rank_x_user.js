const sequelize = require('../config/db.config');
const Rank = require('./rank');
const User = require('./user');

const RankXUser = sequelize.define('rank_x_user', {});

RankXUser.belongsTo(Rank, {
    foreignKey: 'rank_id',
    targetKey: 'id'
});
RankXUser.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id'
});

module.exports = RankXUser;