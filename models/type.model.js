import sequelize from '../config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class typeModel extends Model{}

typeModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }


    
   
}, {
    sequelize, 
    modelName: 'type',
    freezeTableName: true,
    underscored: true,
})


export default typeModel