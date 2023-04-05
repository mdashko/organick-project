const { getData } = require("../controllers/data");
const { Router } = require("express");
const router = Router();

router.get("/", getData);

module.exports = router;
