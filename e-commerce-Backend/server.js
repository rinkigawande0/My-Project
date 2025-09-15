const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cartRoutes = require('./routes/cartRoutes');


dotenv.config();//Load variables from .env
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products',productRoutes);//All product routes handled here
app.use('/api/users',userRoutes);//All user routes handled here
app.use("/api/admin",adminRoutes);//All admin routes handles here
app.use("/api/cart", cartRoutes);//All cart routes handled here



// Test Route
app.get("/api/health",(req,res)=>{
  res.send('Server is running');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log("MongoDB connection failed:",err));

// Start the server.
const port = process.env.PORT || 8080;
app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
})

