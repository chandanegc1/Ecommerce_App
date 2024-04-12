import Products from "../module/Products.js";

export const allProduct = async (req, res) => {
try {
    const { name, brand, price } = req.query;
    const query = {};
    if (name) query.name = new RegExp(name, 'i');
    if (brand) query.brand = new RegExp(brand, 'i');
    if (price) query.price = parseFloat(price);

    const foundProducts = await Products.find(query);
    res.send(foundProducts);
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

  export const search = async (req, res) => {
    try {
      const { name, brand, price } = req.query;

      const query = {};
      if (name) query.name = new RegExp(name, 'i');
      if (brand) query.brand = new RegExp(brand, 'i');
      if (price) query.price = parseFloat(price);
  
      const foundProducts = await Products.find(query);
  
      res.send(foundProducts);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };
  
  