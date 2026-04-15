const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { login ,register,getAllUsers} = require("../controllers/authController");

router.post("/create", register);
router.post("/login", login);
router.get("/list", getAllUsers);


module.exports = router;