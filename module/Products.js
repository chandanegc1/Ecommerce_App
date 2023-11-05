import mongoose from "mongoose";
const registerschema = mongoose.Schema({
    name:{
        type:String,
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
const Products = mongoose.model("Products" , registerschema);
export default Products;
