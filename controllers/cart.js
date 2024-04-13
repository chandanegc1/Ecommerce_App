
import Cart from "../module/cart.js";
export const clearAllCart = async (req, res) => {
    try {
      const result = await Cart.deleteMany({});
      res.send({
        message: "Collection cleared",
        deletedCount: result.deletedCount,
      });
    } catch (error) {}
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

  export const getCartCount = async(req ,res)=>{
    try {
      const cartCount = await Cart.countDocuments();
      res.status(200).json({cartCount});
    } catch (error) {
      res.status(400).json({msg:"something went wrong"}); 
    }
    
  }

  export const coupon = async()=>{
    try {
      const data = req.body;
      if(data == "XYZNM") res.status.json({data:true});
      else res.status.json({data:false});
    } catch (error) {
      console.log(error);
    }
  }