import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white px-6">
      {/* Navbar placeholder */}
      <nav className="flex justify-between items-center py-6 max-w-6xl mx-auto">
        <div className="text-purple-800 font-bold text-2xl">Kalaniketan</div>
        <ul className="flex space-x-6 text-purple-700 font-semibold">
          <li>Home</li>
          <li>Cakes & Classes</li>
          <li>Enquiry</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-6">
          Welcome to <span className="text-purple-600">Kalaniketan</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover our delicious cakes and enriching classes designed for all ages.
        </p>
        <button className="bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-800 transition">
          Explore Our Offerings
        </button>
      </section>

      {/* Classes & Cakes Info */}
      <section className="py-20 bg-white max-w-6xl mx-auto rounded-lg shadow-md px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-purple-800 mb-3">Cakes</h2>
            <p className="text-gray-600">
              Delight your celebrations with our freshly baked cakes. Custom designs available for birthdays, weddings, and special occasions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-purple-800 mb-3">Baking Classes</h2>
            <p className="text-gray-600">
              Learn baking from scratch with our expert-led classes. Suitable for beginners and advanced bakers alike.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-purple-800 mb-3">Art & Craft Classes</h2>
            <p className="text-gray-600">
              Explore creativity through our engaging art and craft sessions for kids and adults.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm max-w-6xl mx-auto">
        © 2025 Kalaniketan. All rights reserved.
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:text-purple-700">Facebook</a>
          <a href="#" className="hover:text-purple-700">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

