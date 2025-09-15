const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const { use } = require("react");

const userSchema = new mongoose.Schema({
  name:{type:String, required:true,trim:true},
  email:{type:String, required:true, unique:true,lowercase:true},
  password:{type:String, required:true, minlength:6},

  role:{
    type:String,
    enum:['user','admin'],
    default:'user'
  }
},{
  timestamps:true // adds createdAt and updatedAt fields
});

const User = mongoose.model('User',userSchema);
module.exports = User;