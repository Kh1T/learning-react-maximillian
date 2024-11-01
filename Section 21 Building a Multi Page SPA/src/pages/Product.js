import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  {
    productId: "p1",
    title: "Product 1",
  },
  {
    productId: "p2",
    title: "Product 2",
  },
  { productId: "p3", title: "Product 3" },
];
const ProductPage = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.productId}>
            <Link to={`/products/${product.productId}`}>{product.title}</Link>
          </li>
        ))}
        <li>
          <Link></Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductPage;
