const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const ensureIsAuthenticated = require("../middlewares/ensureIsAuthenticated");

router.get("/admin", ensureIsAuthenticated, articleController.index);
router.get("/create", ensureIsAuthenticated, articleController.create);
router.post("/", ensureIsAuthenticated, articleController.store);
router.get("/edit/:id", ensureIsAuthenticated, articleController.edit);
router.post("/edit/:id", ensureIsAuthenticated, articleController.update);
router.get("/delete/:id", ensureIsAuthenticated, articleController.destroy);
router.get("/:id", articleController.show);

module.exports = router;
