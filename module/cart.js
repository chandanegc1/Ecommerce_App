import mongoose from "mongoose";
const registerschema = mongoose.Schema({
    name:{
        type:String,
    },
    id:{
        type:String
    },
    img:{
        type:String,
    },
    brand:{
        type:String,
    }, 
    price:{
        type:Number 
    },
});
const Cart = mongoose.model("Cart" , registerschema);
export default Cart;
