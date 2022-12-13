import express  from "express"
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3000


const app = express();
app.use (express.urlencoded ({extended: true}))


app.get('/', ( req, res) => {
     res.send('Hi');
})
app.listen(3000, () => {
     console.log('Server is runing pn localhost:${port}');
});