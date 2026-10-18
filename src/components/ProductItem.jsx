
function ProductItem({ product }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price.toFixed(2)}</p>
      <p>Category: {product.category}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
}

export default ProductItem;