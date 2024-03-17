import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    comment:String,
    productId:String,
    userName:String
});
 
const Comment = mongoose.model("Comment" , commentSchema);
export default Comment;