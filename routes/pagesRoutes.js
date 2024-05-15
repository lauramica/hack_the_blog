const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pagesController");
const ensureIsAuthenticated = require("../middlewares/ensureIsAuthenticated");

router.get("/login", pageController.showLogin);
router.post("/login", pageController.login);
router.use(ensureIsAuthenticated)
router.get("/",pageController.showHome);

module.exports = router;
