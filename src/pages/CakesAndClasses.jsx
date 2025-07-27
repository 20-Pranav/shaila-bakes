import React from "react";

export default function CakesAndClasses() {
  return (
    <div className="min-h-screen bg-purple-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">
        Cakes and Classes
      </h1>

      <p className="text-lg text-gray-700 max-w-xl mb-8">
        Here you’ll find information on our delicious cakes and upcoming baking classes. Coming soon!
      </p>

      <footer className="mt-auto pt-8 border-t border-gray-300 text-gray-600 text-sm max-w-xl">
        <p>© 2025 Kalaniketan. All rights reserved.</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://facebook.com" className="hover:text-purple-700" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://instagram.com" className="hover:text-purple-700" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

