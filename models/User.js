const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class User extends Model {}

User.init({
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    zipcode:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
    hooks: {
        beforeCreate: async (newUserData) => {
            newUserData.password = bcrypt.hashSync(newUserData.password,10);
            return newUserData
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'

})

module.exports = User