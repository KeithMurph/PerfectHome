const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Favorite extends Model {}

Favorite.init({
    favorite_dog_id:{
        type:DataTypes.INTEGER
    },
    user_id:{
        type:DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
          }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite'
})

module.exports = Favorite