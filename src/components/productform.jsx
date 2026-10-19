import React, { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !price || !category.trim()) {
      alert("Please fill all fields");
      return;
    }

    onAddProduct({
      id: Date.now(),
      name: name.trim(),
      price: Number(price),
      category: category.trim()
    });

    setName("");
    setPrice("");
    setCategory("");

    alert("Product added successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        min="0.01"
        step="0.01"
        required
      />

      <input
        type="text"
        placeholder="Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
