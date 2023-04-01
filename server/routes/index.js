const { Router } = require("express");
const router = Router();

router.use("/orders", require("./orders"));
router.use("/products", require("./products"));

module.exports = router;
