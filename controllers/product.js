import Products from "../module/Products.js";
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