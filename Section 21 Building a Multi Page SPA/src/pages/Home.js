import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/product">Product</Link>
      </p>
    </div>
  );
};

export default HomePage;
