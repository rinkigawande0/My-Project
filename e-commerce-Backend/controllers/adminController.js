const User = require("../models/user");

// GET all users (Admin only)
const getAllUsers = async(req,res)=>{
  try {
    const users = await User.find().select("-password"); //hide password
    res.status(200).json({ users });
  } catch (error) {
    console.error("Admin Get Users Error: ",error.message);
    res.status(500).json({msg:"Server Error", error:error.message});
  }
};

module.exports = { getAllUsers };