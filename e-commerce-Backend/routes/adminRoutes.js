const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../controllers/adminController");
const { authMiddleware } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/authorizeRoles")

// Admin only route
router.get("/users", authMiddleware, authorizeRoles("admin"), 
getAllUsers);

module.exports = router;