const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { login ,register} = require("../controllers/authController");

router.post("/create", register);
router.post("/login", login);


module.exports = router;