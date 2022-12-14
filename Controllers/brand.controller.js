import brandModel from '../models/brand.model.js'

import productModel from '../models/product.model.js'


brandModel.hasMany(productModel)
productModel.belongsTo(brandModel)

class GenderController {
      // class constructor

	constructor() {
		// console.log("Artist Controller is fired");
	}



    list = async (req, res) => {
        let { gender } = req.body
    
        const result = await genderModel.findAll({
            attributes: ['id','gender']
    
        })
        res.json(result)
    }
    
    details = async (req, res) => {
        const  { id } = req.params || 0
        const result = await genderModel.findOne({
            attributes: ['id', 'gender'],
            where: { id: id }
    
    
        })
    
        res.json(result)
    }
    
    create = async (req, res) => {
        const  { gender } = req.body;
        if(gender) {
             const model = await genderModel.create (req.body)
             res.json({ newId: model.id })
        }else{
            res.sendStatus(418)
    
     }
    }
    
    update = async (req, res) => {
        const { id } = req.params ||0
        const {gender } = req.body;
        if (id && gender) { 
            const model = await genderModel.update(req.body, {
               where: { id: id} 
            })
            res.json ({ 
                msg: 'gender update'
            })
        }else{
            res.sendStatus(418)
        }
    }
    delete = async(req, res) =>{
        try{
            await genderModel.destroy({ id: req.params.id});
            res.sendStatus(200)
        }catch(err){
            res.send(err)
        }
    }
    }
  

export default GenderController