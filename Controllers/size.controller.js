import sizeModel from '../models/size.model.js'


class SizeController {




list = async (req, res) => {
    let { size } = req.body

    const result = await sizeModel.findAll({

    })
    res.json(result)
}

details = async (req, res) => {
    const  { id } = req.params || 0
    const result = await sizeModel.findAll({
        attributes: ['id', 'size'],
        where: { id: id }


    })

    res.json(result)
}

create = async (req, res) => {
    const  { size } = req.pody;
    if(size) {
         const model = await sizeModel.create (req.body)
         res.json({ newId: model.id })
    }else{
        res.sendStatus(418)

 }
}
}
  

export default SizeController