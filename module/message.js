import mongoose from "mongoose";
const messageSchema = mongoose.Schema({
    fullname:String,
    email:String,
    subject:String,
    message:String
});

const Message = mongoose.model("Message" , messageSchema);
export default Message;