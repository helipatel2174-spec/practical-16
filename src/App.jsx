
import React, { useState } from "react";
import ProductForm from "./components/Productform";
import ProductList from "./components/Productlist";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((previousProducts) => [
      ...previousProducts,
      product
    ]);
  };

  return (
    <div className="container">
      <h1>Product Management System</h1>

      <ProductForm onAddProduct={addProduct} />

      <ProductList products={products} />
    </div>
  );
}

export default App;