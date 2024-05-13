const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get("/admin", articleController.index);
router.get("/create", articleController.create);
router.post("/", articleController.store);
router.get("/edit/:id", articleController.edit);
router.post("/edit/:id", articleController.update);
router.get("/delete/:id", articleController.destroy);
router.get("/:id", articleController.show);

module.exports = router;
