import mongoose from "mongoose";
const Userschema = mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:[true , "email already exist"]
    },
    phone:{
        type:String,
        require:true,
    }, 
    password:{
        type:String ,
        require:true
    },
    cart:[
        {
            items:{
                type: mongoose.Types.ObjectId,
                ref: 'Products',
            }
        }
    ]
});
const Register = mongoose.model("Register" , Userschema);
export default Register;
