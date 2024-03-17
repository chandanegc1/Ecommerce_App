import express  from "express";
import cookieParser from 'cookie-parser';
const app = express();

import "./db/connection.js"
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT 
import cors from "cors";

         //  midlewares  
app.use(cors());
app.use(cookieParser());         
app.use(express.json());
app.use(express.urlencoded({extended:false})); 

import router from "./routers/shop.js"
import authRouter from "./routers/authRouter.js"
app.use(router);   
app.use(authRouter);


        // server create 
app.listen(port ,()=>{
    console.log("connected.....");  
})

