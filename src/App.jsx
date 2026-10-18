import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...product, id: Date.now() },
    ]);
  };

  return (
    <div className="container">
      <h1>Product Management System</h1>

      <ProductForm addProduct={addProduct} />

      <ProductList products={products} />
    </div>
  );
}

export default App;