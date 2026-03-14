import { useState } from "react";

function Checkout({ cart }) {
  const [placed, setPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
  };

  if (placed) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-green-600">
          Your order has been placed!
        </h1>
        <p className="text-gray-600 mt-2">
          Thank you for shopping with us.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <p className="mb-4 text-gray-600">
        Total Amount: <span className="font-semibold">${total}</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Address</label>
          <input
            type="text"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Phone Number</label>
          <input
            type="tel"
            pattern="[0-9]{11}"
            placeholder="03XXXXXXXXX"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Place Order
        </button>

      </form>
    </div>
  );
}

export default Checkout;