const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  cartItems: [
    {
      product: { type: Object },
    },
  ],
  totalPrice: {
    type: Number,
  },
  userEmail: {
    type: String,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
