import GenderModel from '../models/gender.model.js'


class GenderController {




list = async (req, res) => {
    let { gender } = req.body

    const result = await GenderModel.findAll({

    })
    res.json(result)
}

details = async (req, res) => {
    const  { id } = req.params || 0
    const result = await GenderModel.findAll({
        attributes: ['id', 'gender'],
        where: { id: id }


    })

    res.json(result)
}

create = async (req, res) => {
    const  { gender } = req.pody;
    if(gender) {
         const model = await GenderModel.create (req.body)
         res.json({ newId: model.id })
    }else{
        res.sendStatus(418)

 }
}
}
  

export default GenderController