
// importing the models
import UserModel from '../models/user.model.js'
import ReviewModel from '../models/review.model.js'
// Join Table
UserModel.hasMany(ReviewModel)
ReviewModel.belongsTo(UserModel)


// ReviewModel.hasMany(productModel)
// produetModel.belongsTo(ReviewModel)



     class ReviewController {
          list = async (req, res) => {
              let { limit, attributes } = req.query
              limit = parseInt(limit) || 1000
              const attr = attributes ? attributes.split(',') : new Array
              ('id', 'date', 'rating', )
      
      
              const result = await UserModel.findAll({
                  attributes: attr,
                  limit: limit
              })
              res.json(result)
          }
    

details = async (req, res) => {
    const  { id } = req.params || 0
    const result = await ReviewModel.findOne({
        attributes: ['id', 'date', 'rating', 'title','content', 'user_id'],
        where: { id: id }


    })

    res.json(result)
}

create = async (req, res) => {
    const  { date, rating, title,content, user_id } = req.body;
    if( date && rating && title && content && user_id) {
         const model = await ReviewModel.create (req.body)
         res.json({ newId: model.id })
    }else{
        res.sendStatus(418)

 }
}
 update = async (req, res) => {
     const { id } = req.params || 0
     const  { date, rating, title, content, user_id } = req.body;

     if(id && date && rating && title && content && user_id) {
          const model = await ReviewModel.update (req.body)
         where:  {id: id}
     }else{
         res.sendStatus(418)
 
  }

  
}
update = async (req, res) => {
     const { id } = req.params || 0
     const { review } = req.body;
     if(id && review) {
         const model = await ReviewModel.update(req.body, {
             where: { id: id }
         })
         res.json({
             msg: 'review updated'
         })
     } else {
         res.sendStatus(418)
     }
 }
 delete = async (req, res) => {
     try {
         await ReviewModel.destroy({ where: { id: req.params.id }});
         res.sendStatus(200)
     } catch(err) {
         res.send(err)
     }
 }


 }








export default ReviewController
