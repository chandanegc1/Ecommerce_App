import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";
import Register from "../module/Registration.js";

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
      user.password = "null";
      res.status(200).json({user , msg: 'User logged in' });
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
  
  export const currentUser = async(req , res)=>{
    try {
      const user = await Register.findOne({_id:req.user.userId});
      user.password = "null";
      res.status(200).json({user});
    } catch (error) {
      res.status(400).json({msg:"something went wrong"}); 
    }
  }
  
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

  export const updateUserPrfl = async (req, res) => {
    try {
      const user = await Register.findOne({ _id: req.user.userId});
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
      user.password = "null";
      res.status(200).json({user, msg:"update successfully.."});
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };