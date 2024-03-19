import mongoose from "mongoose";
const Productschema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    brand:{
        type:String,
    }, 
    price:{
        type:Number,
        require:true
    },
});
const Products = mongoose.model("Products" , Productschema);
export default Products;
