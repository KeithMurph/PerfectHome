const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Preferences extends Model {}

Preferences.init({
    type:{
        type:DataTypes.STRING
    },
    breed:{
        type:DataTypes.STRING
    },
    size: {
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.STRING
    },
    house_size:{
        type:DataTypes.STRING
    },
    good_with_children:{
        type:DataTypes.BOOLEAN
    },
    good_with_dogs:{
        type:DataTypes.BOOLEAN
    },
    good_with_cats:{
        type:DataTypes.BOOLEAN
    },
    has_yard:{
        type:DataTypes.STRING
    },
    has_claws:{
        type:DataTypes.BOOLEAN
    },
    spayed:{
        type:DataTypes.BOOLEAN
    },
    special_needs:{
        type:DataTypes.BOOLEAN
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
    modelName: 'preferences'
})

module.exports = Preferences