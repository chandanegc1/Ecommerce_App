import express from "express";
import cookieParser from "cookie-parser";
import router from "./routers/shop.js";
import authRouter from "./routers/authRouter.js";
import dotenv from "dotenv";
import cors from "cors";
import "./db/connection.js";

const app = express();
dotenv.config();
const port = process.env.PORT;

//  midlewares
app.use(express.static("build")); 
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/v1", router);
app.use("/api/v1", authRouter);

// server create
app.listen(port, () => {
  console.log("connected.....");
});
 