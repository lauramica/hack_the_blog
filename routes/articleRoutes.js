const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

// Rutas relacionadas a los artículos:
// ...

/* router.get("/", articleController.index);
router.get("/create", articleController.create);
router.post("/", articleController.store);
router.get("/:id", pageController.showArticle);
router.get("/:id/editar", articleController.edit);
router.patch("/:id", articleController.update);
router.delete("/:id", articleController.destroy); */

router.get("/:id", articleController.show);

module.exports = router;
