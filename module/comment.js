import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    comment:String,
    userid:String,
    user:String

});

const Comment = mongoose.model("Comment" , commentSchema);
export default Comment;