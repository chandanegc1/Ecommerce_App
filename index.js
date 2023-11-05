import express  from "express";
const app = express();

import "./db/connection.js"
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT 
import cors from "cors";

         //  midlewares            
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

import router from "./routers/shop.js"
app.use(router);   

        // server create 
app.listen(port ,()=>{
    console.log("connected.....");
})

