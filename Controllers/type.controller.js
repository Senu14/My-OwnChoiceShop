import TypeModel from '../models/type.model.js';
import ProductModel from '../models/product.model.js';

/**
	 * Method list - henter alle records
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */

TypeModel.hasMany(ProductModel)
ProductModel.belongsTo(TypeModel)

// Controller for typets
class TypeController {
     // class constructor

	constructor() {
		// console.log("typet Controller is fired");
	}


list = async (req, res) => {
          const orderby = [req.query.orderby || 'id']
          orderby.push (req.query.dir || 'ASC')
          const limit = req.query.limit || 1000
          const result = await TypeModel.findAll({
               order:[orderby],
              limit: Number(limit)
     })
		res.json(result)
	}
details = async (req, res) => {
	const { id } = req.params || 0
	const result = await TypeModel.findOne({
	    attributes: ['id', 'type'],
	    where: { id: id }
	})
	res.json(result)
 }
create = async (req, res) => {
	const { type } =req.body;
	if  (type) { 
		const model = await TypeModel.create (req.body)
		 res.json({ newId: model.id});
	}else{
		res.sendStatus(418);

	}

}
update = async (req, res) => {
	const { id } = req.params || 0
	const { type } = req.body;
	if(id && type) {
	    const model = await TypeModel.update(req.body, {
		   where: { id: id }
	    })
	    res.json({
		   msg: 'Type updated'
	    })
	} else {
	    res.sendStatus(418)
	}
 }
 delete = async (req, res) => {
	try {
	    await TypeModel.destroy({ where: { id: req.params.id }});
	    res.sendStatus(200)
	} catch(err) {
	    res.send(err)
	}
 }
};
	
       

export default TypeController

