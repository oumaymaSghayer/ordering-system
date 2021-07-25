const express = require("express");
const router = express.Router();
const orderService = require("./order.service");
const itemService = require("./../items/item.service");

// routes
router.get("/", getAllOrders);
router.get("/:id", getByUserId);
router.post("/create", createOrder);

module.exports = router;

function getAllOrders(req, res, next) {
  orderService
    .getAll()
    .then((orders) => res.json(orders))
    .catch((err) => next(err));
}

function createOrder(req, res, next) {
  console.log("creating order ");
  //update stock
  for (let i = 0; i < req.body.ordersList.length; i++) {
    itemService.updateQuantity(req.body.ordersList[i]);
  }
  //save order
  orderService
    .create(req.body)
    .then(() => res.json({ message: "Order successfully Created !" }))
    .catch((err) => next(err));
}

function getByUserId(req, res, next) {
  orderService
    .getByUserId(req.params.id, req.body)
    .then((orders) => res.json(orders))
    .catch((err) => next(err));
}
