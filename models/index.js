const Favorite = require('./Favorite');
const Preferences = require('./Preferences');
const User = require('./User')
const Adoptable = require("./Adoptable")

User.hasMany(Favorite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Favorite.belongsTo(User, {
    foreignKey: 'user_id',
});


Preferences.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    User,
    Favorite,
    Preferences,
    Adoptable
};