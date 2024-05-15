const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pagesController");

router.get("/login", pageController.showLogin);
router.post("/login", pageController.login);
router.get("/logout", pageController.logout);
router.get("/", pageController.showHome);

module.exports = router;
