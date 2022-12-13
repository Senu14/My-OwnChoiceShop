import brandModel from '../models/brand.model.js'


class BrandController {
      // class constructor

	constructor() {
		// console.log("Artist Controller is fired");
	}



list = async (req, res) => {
    let { brand } = req.body

    const result = await brandModel.findAll({

    })
    res.json(result)
}

details = async (req, res) => {
    const  { id } = req.params || 0
    const result = await brandModel.findAll({
        attributes: ['id', 'brand'],
        where: { id: id }


    })

    res.json(result)
}

create = async (req, res) => {
    const  { brand } = req.pody;
    if(brand) {
         const model = await brandModel.create (req.body)
         res.json({ newId: model.id })
    }else{
        res.sendStatus(418)

 }
}
}
  

export default BrandController