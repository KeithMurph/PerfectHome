const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Adoptable extends Model {}

Adoptable.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description: {
        type:DataTypes.STRING
    },
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
    spayed:{
        type:DataTypes.BOOLEAN
    },
    special_needs:{
        type:DataTypes.BOOLEAN
    },
    image_url:{
        type:DataTypes.TEXT
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
    modelName: 'adoptable'
})

module.exports = Adoptable