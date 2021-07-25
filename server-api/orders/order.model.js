const mongoose = require("mongoose");
const Item = require("./../items/item.model").schema;
const Schema = mongoose.Schema;
const schema = new Schema({
  userId: { type: String, required: true },
  ordersList: [Item],
});

module.exports = mongoose.model("Order", schema);
