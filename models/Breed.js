const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Breed extends Model {}

Breed.init({
   breed:{
       type:DataTypes.STRING,
       primaryKey:true
   },
   size:{
       type:DataTypes.STRING
   },
   home_requirement:{
       type:DataTypes.STRING
   },
   temperament:{
        type:DataTypes.TEXT
   },
   image_url:{
        type:DataTypes.TEXT
   }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'breed'
})

module.exports = Breed