function ProductList({ products, onDelete }) {
  return (
    <div className="product-items">
      <h2>Product List</h2>

      {products.map((product, index) => (
        <div key={product.id || index}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
          <p>Quantity: {product.quantity}</p>

          <button onClick={() => onDelete(product.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;