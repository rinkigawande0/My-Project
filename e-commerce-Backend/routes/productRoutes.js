const express = require("express");
const router = express.Router();
const {getAllProducts, createProduct, getProductById, updateProductById, deleteProduct} = require('../controllers/productController');
const {authMiddleware} = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/authorizeRoles');
const { getAllUsers } = require("../controllers/adminController");

// public route
//GET /api/products
router.get("/",getAllProducts);

// Get By id 
router.get("/:id",getProductById);

// For Role
router.get("/admin/users", authMiddleware, authorizeRoles("admin"), getAllUsers);

// admin protected route
//POST Create a new product
// router.post("/",createProduct);
router.post("/", authMiddleware, authorizeRoles("admin"),createProduct);


// PUT/UPDATE 
router.put("/:id",authMiddleware,authorizeRoles("admin"),updateProductById);

// Delete
router.delete("/:id",authMiddleware,authorizeRoles("admin"),deleteProduct);



 
// // Test route
// router.get('/test',(req,res)=>{
//   res.send("Product test route working")
// })

module.exports = router;