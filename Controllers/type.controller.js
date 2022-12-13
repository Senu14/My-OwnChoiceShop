import TypetModel from '../Models/type.model.js';


/**
	 * Method list - henter alle records
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */


// Controller for typets
 
class typeController {
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
detail = async (req, res) => {
		     const result = await TypetModel.findAll({
			where: { id: req.params.id },
			include: SongModel,
	});
		res.json(...result);
	}
create = async (req, res) => {
	const { id, name } =req.body;
	if  (id && name) { 
		const model = await TypetModel.create (req.boody)
		return res.json({ newId: model.id});
	}else{
		res.send(418);

	}

}
};
	
       

export default typeController

