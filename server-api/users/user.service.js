const config = require("../config.json");
const db = require("./../helpers/db");
const User = db.User;

module.exports = {
  getAll,
  create,
};

async function getAll() {
  return await User.find();
}

async function create(userParam) {
  const user = new User(userParam);
  await user.save();
  return user;
}
