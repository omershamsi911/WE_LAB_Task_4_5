import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-600">Your cart is empty.</p>
      )}

      {cart.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow flex justify-between items-center mb-4"
        >
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-500">${item.price}</p>
          </div>

          <button
            onClick={() => removeFromCart(index)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Total: ${total}</h2>

          <Link
            to="/checkout"
            className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;