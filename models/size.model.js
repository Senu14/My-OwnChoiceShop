import sequelize from '../config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class sizeModel extends Model{}

sizeModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
   
}, {
    sequelize, 
    modelName: 'size',
    freezeTableName: true,
    underscored: true,

    

    })

export default sizeModel