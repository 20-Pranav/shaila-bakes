import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto text-center py-6">
        <p>© 2025 Kalaniketan. All rights reserved.</p>
        <div className="mt-3 flex justify-center space-x-4">
          <a href="https://facebook.com" className="hover:text-white">Facebook</a>
          <a href="https://instagram.com" className="hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
