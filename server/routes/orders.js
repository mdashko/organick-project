const { getOrders, createOrder } = require("../controllers/orders");
const { Router } = require("express");
const router = Router();

router.get("/", getOrders);
router.post("/create", createOrder);

module.exports = router;
