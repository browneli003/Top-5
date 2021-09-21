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

User.belongsToMany(Topics, {
    through: Votes,
    foreignKey: 'user_id'
});

Topics.belongsToMany(User, {
    through: Votes,
    foreignKey: 'topic_id'
});

Votes.belongsTo(User, {
    foreignKey: 'user_id'
});

Votes.belongsTo(Topics, {
    foreignKey: 'topic_id'
});

User.hasMany(Votes, {
    foreignKey: 'user_id'
});

Topics.hasMany(Votes, {
    foreignKey: 'topic_id'
});

module.exports = { Topics, User, Votes };