const config = require("../config.json");
const db = require("./../helpers/db");

const Order = db.Order;

module.exports = {
  getAll,
  create,
  getByUserId,
};

async function getAll() {
  return await Order.find();
}

async function create(orderParam) {
  const order = new Order(orderParam);
  await order.save();
}

async function getByUserId(userId) {
  return await Order.find({ userId: userId });
}
