const Product = require("../models/productModel.js");

let productController = {};

productController.getProducts = async (req, res, next) => {
  
  try {
    const prodcuts = await Product.find({});
    res.json(prodcuts);
  } catch (err) {
    return next({
      message: "error in getProdcuts: " + err,
      log: err,
    });
  }
};



module.exports = productController;
