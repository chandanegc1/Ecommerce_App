import Products from "../module/Products.js";
import Cart from "../module/cart.js";
import Register from "../module/Registration.js";
import Message from "../module/message.js";
import Comment from "../module/comment.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";


export const allProduct = async (req, res) => {
  try {
    const product = await Products.find({});
    res.json({product});
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const postProduct = async (req, res) => { 
  try {
    const { name, img, brand, price } = req.body;
    const productData = new Products({ name, img, brand, price });
    const savedata = await productData.save();
    res.status(200).json({
      success: true,
      savedata,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const cartData = async (req, res) => {
  try {
    const {id }= req.params;
    const cartitem = await Cart.find({id});
    res.status(200).send(cartitem);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const postCartData = async (req, res) => {
  try {
    const { name, img, brand, price} = req.body;
    const CartData = new Cart({ name, img, brand, price ,id:req.user.email });
    const savedata = await CartData.save();
    res.status(200).json({
      success: true,
      savedata,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Cart.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({
        error: "Item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Item deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const allUsers = async (req, res) => {
  try {
    const allUser = await Register.find();
    res.status(200).send(allUser);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const userRegister = async (req, res) => {
  try {
    const { fullname, email, phone, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const HashPassword = await bcrypt.hash(password , salt);
    const register = await Register.create({ fullname, email, phone, password:HashPassword });
    res.status(200).send(register);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: 'Please provide email and password' });
    }
    const user = await Register.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }
    const token = jwt.sign(
      { fullname: user.fullname, email: user.email, userId: user._id, phone: user.phone },
      'abs'
    );
    res.cookie('token', token, {
      httpOnly: true,
      // secure: true
      expiresIn:'100d'
    });
    res.status(200).json({ msg: 'User logged in' });
  } catch (error) {
    res.status(500).json({ msg: 'Internal server error' });
  }
};

export const logout = async(req , res)=>{
  try {
    res.cookie('token' , 'logout' , {
      httpOnly:true,
      expiresIn: new Date(Date.now()),
    })
    res.status(200).json({msg:'user logged out'})
  } catch (error) {
    res.status(400).json({msg:error})
  }
}


export const updateUserPrfl = async (req, res) => {
  try {
    const user = await Register.findOneAndUpdate({ email: req.params.id });
    if (!user) {
      res.status(404).json({
        success: false,
        message: "user does not exist",
      });
    }
    const { fullname, email, password, phone } = req.body;
    if (fullname) {
      user.fullname = fullname;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password , salt);
      user.password = password;
    }
    if (phone) {
      user.phone = phone;
    }

    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const clearAllCart = async (req, res) => {
  try {
    const result = await Cart.deleteMany({});
    res.send({
      message: "Collection cleared",
      deletedCount: result.deletedCount,
    });
  } catch (error) {}
};

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

export const currentUser = async(req , res)=>{
  try {
    const user = await Register.findOne({_id:req.user.userId});
    res.status(200).json({user});
  } catch (error) {
    res.status(400).json({msg:"something went wrong"}); 
  }
}

export const getCartCount = async(req ,res)=>{
  try {
    const cartCount = await Cart.countDocuments();
    res.status(200).json({cartCount});
  } catch (error) {
    res.status(400).json({msg:"something went wrong"}); 
  }
  
}