const Product = require('../models/Product');

const getAllProducts = async(req,res)=>{
try {
   const products = await Product.find();
 res.status(200).json(products);
} catch (error) {
  res.status(500).json({msg:"Failed to fetch products", err});
}
};


const createProduct = async(req,res)=>{
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
};

const getProductById = async (req,res)=>{
  try {
    const product = await Product.findById(req.params.id);
    if(!product){
      return res.status(404).json({msg:"Product not found"});
    }

    res.status(200).json(product);//mil jaye toh bhej do
  } catch (error) {
    res.status(500).json({msg:"Server error",error});
    
  }
}

const updateProductById = async(req,res)=>{
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
    {new: true, runValidators: true}
  );

  if(!updateProduct){
    return res.status(404).json({msg:"Product not found"});
  }
res.status(200).json(updateProduct);
  } catch (error) {
     res.status(500).json({msg:"Server error",error});
  }
}

const deleteProduct = async (req,res)=>{
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if(!product){
      return res.status(404).json({msg:"Product not found"});
    }

    res.status(200).json({msg:"Product Deleted Successfully"});
  } catch (error) {
    res.status(500).json({msg:"Server error",error})
  }
}


module.exports = { 
  getAllProducts, 
  createProduct,
  getProductById,
  updateProductById,
  deleteProduct
};

