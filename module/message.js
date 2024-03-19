import mongoose from "mongoose";
const messageSchema = mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    subject:{
        type:String,
    },
    message:{
        type:String,
    }
});

const Message = mongoose.model("Message" , messageSchema);
export default Message;