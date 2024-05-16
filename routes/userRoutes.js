const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const ensureIsAuthenticated = require("../middlewares/ensureIsAuthenticated");

router.get("/", ensureIsAuthenticated, userController.index);
router.get("/register", userController.create);
router.post("/register", userController.store);
router.get("/edit/:id", ensureIsAuthenticated, userController.edit);
router.post("/edit/:id", ensureIsAuthenticated, userController.update);
router.get("/delete/:id", ensureIsAuthenticated, userController.destroy);
router.get("/:id", userController.show);

module.exports = router;

/* router.get("/admin", ensureIsAuthenticated, articleController.index);
router.get("/create", ensureIsAuthenticated, articleController.create);
router.post("/", ensureIsAuthenticated, articleController.store);
router.get("/edit/:id", ensureIsAuthenticated, articleController.edit);
router.post("/edit/:id", ensureIsAuthenticated, articleController.update);
router.get("/delete/:id", ensureIsAuthenticated, articleController.destroy);
router.get("/:id", articleController.show); */
