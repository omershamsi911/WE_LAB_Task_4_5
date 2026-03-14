import { useState } from "react";
import { FaUser, FaCog, FaShoppingCart } from "react-icons/fa";

function App() {
  const [activeTab, setActiveTab] = useState("Profile");

  const profile = {
    name: "Syed Omer Ahmed Shamsi",
    email: "omershamsi911@gmail.com",
    memberSince: "Jan 2024",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  const orders = [
    { id: 101, item: "Laptop", date: "2026-03-10", status: "Delivered" },
    { id: 102, item: "Smartphone", date: "2026-03-12", status: "Processing" },
    { id: 103, item: "Headphones", date: "2026-03-13", status: "Shipped" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 text-2xl font-bold text-blue-600 border-b">
          MyDashboard
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            className={`flex items-center gap-3 w-full px-4 py-3 rounded hover:bg-blue-50 transition ${
              activeTab === "Profile" ? "bg-blue-100 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("Profile")}
          >
            <FaUser /> Profile
          </button>
          <button
            className={`flex items-center gap-3 w-full px-4 py-3 rounded hover:bg-blue-50 transition ${
              activeTab === "Settings" ? "bg-blue-100 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("Settings")}
          >
            <FaCog /> Settings
          </button>
          <button
            className={`flex items-center gap-3 w-full px-4 py-3 rounded hover:bg-blue-50 transition ${
              activeTab === "Orders" ? "bg-blue-100 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("Orders")}
          >
            <FaShoppingCart /> Orders
          </button>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {activeTab === "Profile" && (
          <div className="flex flex-col items-center space-y-6">
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center w-full max-w-md">
              <img
                src={profile.avatar}
                alt="Avatar"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-gray-500">{profile.email}</p>
              <p className="mt-2 text-gray-400 text-sm">
                Member since {profile.memberSince}
              </p>
            </div>
          </div>
        )}

        {activeTab === "Settings" && (
          <div className="bg-white shadow rounded-lg p-6 max-w-lg mx-auto space-y-4">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <div>
              <label className="block font-medium mb-1">Update Name:</label>
              <input
                type="text"
                defaultValue={profile.name}
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Update Email:</label>
              <input
                type="email"
                defaultValue={profile.email}
                className="border p-2 rounded w-full"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-2">
              Save Changes
            </button>
          </div>
        )}

        {activeTab === "Orders" && (
          <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Orders</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4">Order ID</th>
                  <th className="py-2 px-4">Item</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{o.id}</td>
                    <td className="py-2 px-4">{o.item}</td>
                    <td className="py-2 px-4">{o.date}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-3 py-1 rounded text-white text-sm ${
                          o.status === "Delivered"
                            ? "bg-green-500"
                            : o.status === "Processing"
                            ? "bg-yellow-500"
                            : "bg-blue-500"
                        }`}
                      >
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;