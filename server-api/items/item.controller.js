const express = require("express");
const router = express.Router();
const itemService = require("./item.service");

// routes
router.get("/", getAllItems);
router.post("/create", createItem);
router.put("/:id", update);
module.exports = router;

function getAllItems(req, res, next) {
  itemService
    .getAll()
    .then((items) => res.json(items))
    .catch((err) => next(err));
}

function createItem(req, res, next) {
  console.log({ "creating item ": req.body.name });
  itemService
    .create(req.body)
    .then(() => res.json({ message: "Item successfully Created !" }))
    .catch((err) => next(err));
}

function update(req, res, next) {
  itemService
    .updateQuantity(req.params.id, req.body)
    .then(() => res.json({ message: "Item updated successfully !" }))
    .catch((err) => next(err));
}
