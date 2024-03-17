import mongoose from "mongoose";
const registerschema = mongoose.Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
        unique:[true , "email already exist"]
    },
    phone:{
        type:String,
    }, 
    password:{
        type:String ,
    },
});
const Register = mongoose.model("Register" , registerschema);
export default Register;
