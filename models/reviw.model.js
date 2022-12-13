import sequelize from '../config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class reviwModel extends Model{}

reviwModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
   rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    

    }
}, {
    sequelize, 
    modelName: 'reviw',
    freezeTableName: true,
    underscored: true,

})


export default reviwModel