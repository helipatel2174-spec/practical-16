import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default ProductList;