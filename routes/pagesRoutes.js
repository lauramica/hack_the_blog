const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pagesController");

router.get("/", pageController.showHome);

module.exports = router;
