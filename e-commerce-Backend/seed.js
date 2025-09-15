// seed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require("./models/Product");
const products = require("./data/products");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB connected!');
    seedProducts();
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  });

// Function to insert data
const seedProducts = async () => {
  try {
    await Product.deleteMany(); // पहले से data हो तो हटाओ
    await Product.insertMany(products); // नए product insert करो
    console.log('✅ All products inserted successfully!');
    process.exit(); // process बंद करो
  } catch (err) {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  }
};
