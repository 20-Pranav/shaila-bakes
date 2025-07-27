import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-purple-50 shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-purple-700">
          Kalaniketan
        </Link>
        <nav className="flex space-x-6 text-purple-700 font-medium">
          <Link to="/" className="hover:text-purple-600 px-2 py-1">Home</Link>
          <Link to="/cakes" className="hover:text-purple-600 px-2 py-1">Cakes & Classes</Link>
          <Link to="/enquiry" className="hover:text-purple-600 px-2 py-1">Enquiry</Link>
          <Link to="/contact" className="hover:text-purple-600 px-2 py-1">Contact</Link>
          <Link to="/about" className="hover:text-purple-600 px-2 py-1">About</Link>
        </nav>
      </div>
    </header>
  );
}

