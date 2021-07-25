const config = require("../config.json");
const db = require("./../helpers/db");
const Item = db.Item;

module.exports = {
  getAll,
  create,
  updateQuantity,
};

async function getAll() {
  return await Item.find();
}

async function create(itemParam) {
  const item = new Item(itemParam);
  await item.save();
}

async function updateQuantity(itemParam) {
  const item = await Item.findById(itemParam._id);
  if (!item) throw "Item not found";
  item.quantity -= itemParam.quantity;
  if (item.quantity < 0) throw "Not enough in stock";
  await item.save();
}
