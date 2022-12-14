import GenderModel from '../models/gender.model.js'
import ProductModel from '../models/product.model.js'


GenderModel.hasMany(ProductModel)
ProductModel.belongsTo(GenderModel)


class GenderController {




list = async (req, res) => {
    let { gender } = req.body

    const result = await GenderModel.findAll({
        attributes: ['id','gender']

    })
    res.json(result)
}

details = async (req, res) => {
    const  { id } = req.params || 0
    const result = await GenderModel.findOne({
        attributes: ['id', 'gender'],
        where: { id: id }


    })

    res.json(result)
}

create = async (req, res) => {
    const  { gender } = req.body;
    if(gender) {
         const model = await GenderModel.create (req.body)
         res.json({ newId: model.id })
    }else{
        res.sendStatus(418)

 }
}

update = async (req, res) => {
    const { id } = req.params ||0
    const {gender } = req.body;
    if (id && gender) { 
        const model = await GenderModel.update(req.body, {
           where: { id: id} 
        })
        res.json ({ 
            msg: 'Gender update'
        })
    }else{
        res.sendStatus(418)
    }
}
delete = async(req, res) => {
    try{
        console.log(123)
        const result = await GenderModel.destroy({ where: {id: req.params.id}});
      res.sendStatus(200)
    }catch(err){
        res.send(err)
    }
}
}
  

export default GenderController