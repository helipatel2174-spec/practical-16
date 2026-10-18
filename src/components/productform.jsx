import { useState } from "react";

function ProductForm({ addProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !category.trim() ||
      price === "" ||
      quantity === "" ||
      Number(price) < 0 ||
      !Number.isInteger(Number(quantity)) ||
      Number(quantity) < 0
    ) {
      alert("Please enter valid product details.");
      return;
    }

    addProduct({
      name: name.trim(),
      price: Number(price),
      category: category.trim(),
      quantity: Number(quantity),
    });

    setName("");
    setPrice("");
    setCategory("");
    setQuantity("");
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
        min="0"
        step="0.01"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Product Quantity"
        min="0"
        step="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;