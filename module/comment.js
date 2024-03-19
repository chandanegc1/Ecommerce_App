import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    comment:{
        type:String,
        require:true
    },
    productId:{
        type:String,
        require:true
    },
    userName:{
        type:String,
        require:true
    }
} , {timestamps:true}
);
 
const Comment = mongoose.model("Comment" , commentSchema);
export default Comment;