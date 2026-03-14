import { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Keyboard", price: 70 },
    { id: 5, name: "Mouse", price: 40 },
  ];

  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const priceMatch =
      maxPrice === "" || product.price <= Number(maxPrice);

    return nameMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Product Catalog
      </h1>

      {/* Filters */}
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow mb-10 space-y-4">
        <div>
          <label className="block font-medium mb-1">
            Search by Product Name
          </label>
          <input
            type="text"
            placeholder="e.g. Laptop"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">
            Max Price
          </label>
          <input
            type="number"
            placeholder="Enter maximum price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-lg shadow"
          >
            <h2 className="text-xl font-semibold mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600">
              Price: ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;