const Topics = require('./Topics');
const User = require('./User');
const Votes = require('./Votes');

// Associations
User.hasMany(Topics, {
    foreignKey: 'user_id'
});

Topics.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { Topics, User, Votes };