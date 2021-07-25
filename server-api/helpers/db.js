const config = require("./../config.json");
const mongoose = require("mongoose");
const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
const items = require("./../data/items.json");
const Item = require("../items/item.model");
const User = require("../users/user.model");
const Order = require("../orders/order.model");

try {
  console.log("connecting to mongo");
  mongoose
    .connect(
      process.env.MONGODB_URI || config.connectionString,
      connectionOptions
    )
    .then(async () => {
      await Item.deleteMany({});
      await Item.insertMany(items);
    });
} catch (e) {
  console.log(e);
}

mongoose.Promise = global.Promise;

module.exports = {
  User,
  Item,
  Order,
};
