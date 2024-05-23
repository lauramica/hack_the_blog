const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const ensureIsAuthenticated = require("../middlewares/ensureIsAuthenticated");
const atLeast = require("../middlewares/permissionRequired");

router.use(ensureIsAuthenticated);

router.get("/admin", atLeast.admin, articleController.index);
router.get("/create", atLeast.blogger, articleController.create);
router.post("/", atLeast.blogger, articleController.store);
router.get("/edit/:id", atLeast.blogger, articleController.edit);
router.post("/edit/:id", atLeast.blogger, articleController.update);
router.get("/delete/:id", atLeast.blogger, articleController.destroy);

router.get("/:id", articleController.show);

module.exports = router;
