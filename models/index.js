const Favorite = require('./Favorite');
const Preferences = require('./Preferences');
const User = require('./User')
const Adoptable = require("./Adoptable")
const Breed = require("./Breed")
const Post = require("./Post")


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

// User.hasMany(Post,{
//     onDelete:"CASCADE",
//     foreignKey:{
//         allowNull:false
//     }
// });

module.exports = {
    User,
    Favorite,
    Preferences,
    Adoptable,
    Breed,
    Post

};