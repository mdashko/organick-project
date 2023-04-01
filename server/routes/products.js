const { getProducts } = require("../controllers/products");
const { Router } = require("express");
const router = Router();

router.get("/", getProducts);

module.exports = router;