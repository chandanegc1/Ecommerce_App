import Message from "../module/message.js";
import Comment from "../module/comment.js";

export const postMessage = async (req ,res)=>{
    try {
      const {fullname , email , subject ,message} = req.body;
      const result = await Message({fullname , email , subject ,message});
      result.save();
      res.send({
        result
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
    
  }
  
  export const PostComment = async (req , res)=>{
    try {
      const {comment } = req.body;
      const {fullname} = req.user;
      let userName = fullname;
      const productId = req.params.id;
      const PostData = await Comment({comment, userName, productId});
      await PostData.save();
      res.send(PostData);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  
  export const getComment = async (req , res)=>{
    try {
      const getData = await Comment.find({ productId: req.params.id }).sort({ createdAt: -1 });
      res.send(getData);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  
  
  
  