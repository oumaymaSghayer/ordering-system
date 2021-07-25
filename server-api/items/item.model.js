const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  image: { type: String, required: false },
  name: { type: String, required: true },
  quantity: { type: Number, min: 0, required: true },
});

module.exports = mongoose.model("Item", schema);
