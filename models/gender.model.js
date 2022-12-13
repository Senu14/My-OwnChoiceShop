import sequelize from '../config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class genderModel extends Model{}

genderModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    }
   
}, {
    sequelize, 
    modelName: 'gender',
    freezeTableName: true,
    underscored: true,

    

    })

export default genderModel