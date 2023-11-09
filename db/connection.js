import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const main = async ()=>{
    mongoose.connect(process.env.MONG_URL ,({
        useNewUrlParser:true,
        useUnifiedTopology:true
    }))
}
main().then(()=>{
    console.log("DB connection successfull......" , process.env.PORT)
})
.catch((e)=>{});
