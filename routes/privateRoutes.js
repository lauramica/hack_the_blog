const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get("/admin", articleController.index);
router.get("/articles/create", articleController.create);
router.post("/articles", articleController.store);

module.exports = router;
