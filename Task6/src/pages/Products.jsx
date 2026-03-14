function Products({ addToCart }) {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smart Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>

            <p className="text-gray-500 mb-4">${p.price}</p>

            <button
              onClick={() => addToCart(p)}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;