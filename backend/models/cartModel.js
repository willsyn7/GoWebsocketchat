const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartExpiration = 30 * 24 * 60 * 60; // days * hours * minutes * seconds

const cartSchema = new Schema({
  createdAt: { type: Date, expires: cartExpiration, default: Date.now },
  user_id: {

    type: String
  },
  products: [
   
     {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
   
  ],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart