import  Sequelize  from '../config/sequelize.config.js'
import {database, DatabaseError, DataTypes, Model } from 'sequelize'

class productModel extends Model{}

productModel.init({
     id:{
          type: DataTypes.INTEGER,
          autoIncrement:true,
          allowNull:false,
          primaryKey: true
     },

     item_number: {
          type:DataTypes.INTEGER,
          allowNull: false
     },
     img: { 
          type: DataTypes.BLOB,
          allowNull: false
     },
     name:{
          type:DataTypes.STRING,
          allowNull:false
     },
     content:{
          DataTypes:STRING,
          allowNull: false
     },
     stock: {
          type: DataTypes.BOOLEAN,
          allowNull:false
     },
     gender_id: {
        
          type: DataTypes.INTEGER,
          allowNull:false

     }, 
     brand_id: {
          type:DataTypes.INTEGER,
          allowNull:false
     }, 
     reviw_id: {
          type: DataTypes.INTEGER,
          allowNull: false

          
     },
     type_id:{
          type: DataTypes.INTEGER,
          allowNull: false
     }, 
    size_id:{
          type: DataTypes.INTEGER,
          allowNull: false
     }
}, {
     Sequelize,
     modelName: 'product',
     freezetableName: true,
     undersecond: true

})

     


export default productModel