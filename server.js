import  express  from "express";
import config from "./data/config.js";
import { getPeople } from "./controllers/user.js";
import personRoutes from "./routers/personRoutes.js"
import postRoutes from './routers/postRoutes.js'
import commentsRoutes from './routers/commentsRoutes.js'





const app= express()


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

personRoutes(app);
postRoutes(app);
commentsRoutes(app);



app.get('/',(reg,res)=>{
    res.send("hello buddy😎")
})
app.get('/people', getPeople)
app.listen(config.port,()=>{
    console.log(`server is running on ${config.url}`)
})