const express = require("express");
const router = express.Router();
const userService = require("./user.service");

// routes
router.get("/", getAllUsers);
router.post("/create", createUser);

module.exports = router;

function getAllUsers(req, res, next) {
  userService
    .getAll()
    .then((users) => res.json(users))
    .catch((err) => next(err));
}

function createUser(req, res, next) {
  console.log({ "creating user ": req.body });
  userService
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => next(err));
}
