const Cart = require("../models/cartModel.js");

const cartController = {};

cartController.createCart = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { products } = req.body;

    const cartExists = await Cart.findOne({ user_id: userId });

    if (cartExists) {
      cartExists.products = products;
      await cartExists.save();
    } else {
      const cart = await Cart.create({ user_id: userId, products });
      return res.json(cart);
    }
    return res.json(cartExists);
  } catch (err) {
    return next({
      message: "error in createCart: " + err,
      log: err,
    });
  }
};

cartController.getCart = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ user_id: userId }).populate("products");
    return res.json(cart);
  } catch (err) {
    return next({
      message: "error in getCart: " + err,
      log: err,
    });
  }
};

module.exports = cartController;
