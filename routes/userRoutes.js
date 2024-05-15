const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/register", userController.create);
router.post("/register", userController.store);

module.exports = router;
