const express = require("express");
const { registerUser, loginUser, getProfile } = require('../controllers/userController');
const {authMiddleware} = require("../middleware/authMiddleware");
// const { updateProfile } = require("../controllers/userController")
// const { protect } = require('../middleware/authMiddleware')
const router = express.Router();


//@routes POST /api/users/register =>URL endpoint + HTTP method
//@desc  register new user =>	API ka short description
router.post("/register",registerUser);
router.post("/login",loginUser);

// Protected route
router.get("/profile",authMiddleware, getProfile);

// Update profile route (JWT Protected)
// router.put("/update", protect, updateProfile);



module.exports = router;