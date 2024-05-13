const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get("/admin", articleController.index);
router.get("/articles/create", articleController.create);
router.post("/articles", articleController.store);
router.get("/articles/edit/:id", articleController.edit);
router.post("/articles/edit/:id", articleController.update);

module.exports = router;
