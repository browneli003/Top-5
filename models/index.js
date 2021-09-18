const Topics = require('./Topics');
const User = require('./User');
const Votes = require('./Votes');

// Associations
User.hasMany(Topics, {
    foreignKey: 'user_id'
});

User.hasMany(Votes, {
    foreignKey: 'user_id'
});

// Topics.belongsTo(User, {
//     foreignKey: ''
// });









User.belongsToMany(Topics, {
    through: Votes,
    foreignKey: 'user_id'
});



module.exports = { Topics, User, Votes };