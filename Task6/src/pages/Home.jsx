import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-2xl mx-auto text-center mt-20">

      <h1 className="text-5xl font-bold mb-6">
        Welcome to MyStore
      </h1>

      <p className="text-gray-600 text-lg mb-8">
        MyStore is a simple online shop where you can find quality tech
        products like laptops, smartphones and accessories. Browse our
        products, add items to your cart, and place your order easily.
        This demo store shows how a basic e-commerce website works
        using React.
      </p>

      <Link
        to="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Start Shopping
      </Link>

    </div>
  );
}

export default Home;