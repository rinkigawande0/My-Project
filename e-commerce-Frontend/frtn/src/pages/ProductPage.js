import { useEffect, useState } from "react";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Products</h2>
      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p._id} className="p-2 border rounded">{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
