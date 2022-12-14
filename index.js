import express  from "express"
import dotenv from 'dotenv'

// Router
import TypeRouter from "./router/type.router.js";
import InitRouter from "./router/init.router.js";
import BrandRouter from "./router/brand.router.js";
import ProductRouter from "./router/product.router.js"
 import ReviewRouter from "./router/review.router.js"
import GenderRouter from "./router/gender.router.js";
import UserRouter from "./router/user.router.js";

const app = express();
app.use (express.urlencoded ({extended: true}))



dotenv.config()

const port = process.env.PORT || 3000;

app.get('/', ( req, res) => {
     res.send('Hi');
})



//  Use routers
app.use(InitRouter);
app.use(BrandRouter);
app.use(GenderRouter);
app.use(ProductRouter);
app.use(TypeRouter);
app.use(UserRouter);
 app.use(ReviewRouter);


app.listen(4200, () => {
console.log(`Server is runing on port http://localhost:${port}`);
      });