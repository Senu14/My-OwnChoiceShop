import sequelize from '../config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class brandModel extends Model{}

brandModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
   
}, {
    sequelize, 
    modelName: 'brand',
    freezeTableName: true,
    underscored: true,

    

    })

export default brandModel