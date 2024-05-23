const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const ensureIsAuthenticated = require("../middlewares/ensureIsAuthenticated");
const atLeast = require("../middlewares/permissionRequired");

router.get("/register", userController.create);
router.post("/register", userController.store);

router.use(ensureIsAuthenticated);

router.post("/edit/:id", userController.update);
router.get("/delete/:id", userController.destroy);
router.get("/", atLeast.admin, userController.index);
router.get("/edit/:id", atLeast.admin, userController.edit);
router.get("/:id", userController.show);

module.exports = router;
