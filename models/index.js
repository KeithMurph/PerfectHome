const Favorite = require('./Favorite');
const Preferences = require('./Preferences');
const User = require('./User')

User.hasMany(Favorite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Favorite.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsTo(Preferences, {
    foreignKey: 'user_id',
});

Preferences.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    User,
    Favorite,
    Preferences
};