const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pagesController")

// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/", pageController.showHome);
router.get("/articles/:id", pageController.showArticle);

module.exports = router;
