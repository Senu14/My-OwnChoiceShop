import express  from "express"
import dotenv from 'dotenv'

// Router
import TypeRouter from "./router/type.router.js";
import InitRouter from "./router/init.router.js";
import BrandRouter from "./router/brand.router.js";
// import ProductRouter from "./router/product.router.js"
// import ReviwRouter from "./router/reviw.router.js"
import SizeRouter from "./router/size.router.js"
import GenderRouter from "./router/gender.router.js";

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
// app.use(ReviwRouter);
app.use(SizeRouter);
app.use(TypeRouter);



app.listen(port, () => {
     console.log(`Server kører på port http://localhost:${port}`);
      })