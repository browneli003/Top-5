const Topics = require('./Topics');
const User = require('./User');
const Votes = require('./Votes');

// Associations
User.hasMany(Topics, {
    foreignKey: 'user_id'
});

Topics.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany()

module.exports = { Topics, User, Votes };