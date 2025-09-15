const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

// Register a new user
const registerUser = async(req,res)=>{
  try {
    const {name, email, password, role} = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({email});
    if(existingUser){
      return res.status(400).json({msg:"User already exists"});
    }

    // Hash the password here
    const salt = await bcrypt.genSalt(10);//salt generate kro
    const hashedPassword = await bcrypt.hash(password,salt);//orignal password is hash here

    // Create new user with hashed password
    const newUser = new User({name,email,password:hashedPassword, role});//hashed password saved here
    await newUser.save();

    res.status(201).json({msg:"User registered successfully", user:newUser});
  } catch (error) {
    res.status(500).json({msg:"Server error",error:error.message});
  }
};

// user login
const loginUser = async(req,res)=>{
  try {
    const { email, password} = req.body;

    // check if email and password are provided
    if(!email || !password){
      return res.status(400).json({msg:"Please provide email and password"});
    }

    // Find the user by email
    const user = await User.findOne({ email });
    console.log("User Found:", user);
    
    if(!user){
      return res.status(400).json({msg:"Invalid credentials"});
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match:", isMatch);
    
    if(!isMatch){
      return res.status(400).json({msg:"Invalid credentials"});
    }

    // Generate JWT token
    const token = jwt.sign(
      {userId:user._id},//payload
       process.env.JWT_SECRET, //secret       
       { expiresIn: '1d'} //option
    );

    console.log(process.env.JWT_SECRET);
    res.status(200)
    .json(
      {
        msg:"Login Successful",
        token,
        user:
        {
          id:user._id,
          name:user.name,
          email:user.email,
    },
  });
  } catch (error) {
    // console.error(err);
    res.status(500).json({msg:"Server error",error:error.message});
  }
}

// Profile 
const getProfile = async(req,res)=>{
  try {
    const user = await userModel.findById(req.user).select("-paaword");//exclude password
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({msg:"Server error", error:error.message});
  }
}

// const updateProfile = async(req, res)=>{
//   try {
//     // Logged-in user fetched from JWT middleware
//     const user = await User.findById(req.user.id);

//     if(!user){
//       return res.status(404).json({msg:"User not found"});
//     }

//     // update fields if provided in request
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;

//     // if password is being updated, hash it
//     if(req.body.password){
//       const salt = await bcrypt.genSalt(10);
//       user.password = await bcrypt.hash(req.body.password, salt);
//     }

//     // save updated user
//     const updatedUser = await user.save();

//     res.status(200).json({
//       msg:"Profile updated successfully",
//       user:{
//         id: updatedUser._id,
//         name: updatedUser.name,
//         email:updatedUser.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({msg:"Server error", error:error.message});
//   }
// };


module.exports = { registerUser, loginUser, getProfile};