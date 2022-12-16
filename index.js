import express  from "express"
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Router
import TypeRouter from "./router/type.router.js";
import InitRouter from "./router/init.router.js";
import BrandRouter from "./router/brand.router.js";
import ProductRouter from "./router/product.router.js"
import ReviewRouter from "./router/review.router.js"
import GenderRouter from "./router/gender.router.js";
import UserRouter from "./router/user.router.js";
import { router as AuthRouter } from './router/authenticate.router.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use (express.urlencoded ({extended: true}))

app.use (express.static(__dirname + '/views'));

dotenv.config()

const port = process.env.PORT || 3000;


app.set('view-engine', 'ejs')

app.get('/', ( req, res) => {
     res.render('index.ejs');
})
app.get('/login', ( req, res) => {
     res.render('login.ejs');
})

app.post('/login', ( req, res) => {
   
})
app.get('/register', ( req, res) => {
     res.render('register.ejs');
})
app.post('/register', ( req, res) => {
     req.body.email
     
})





//  Use routers
app.use(InitRouter);
app.use(BrandRouter);
app.use(GenderRouter);
app.use(ProductRouter);
app.use(TypeRouter);
app.use(UserRouter);
 app.use(ReviewRouter);
 app.use(AuthRouter);


app.listen(4200, () => {
console.log(`Server is runing on port http://localhost:${port}`);
      });