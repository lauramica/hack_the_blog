const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const ensureIsAuthenticated = require("../middlewares/ensureIsAuthenticated");

router.use(ensureIsAuthenticated);

router.post("/", commentController.store);

module.exports = router;
