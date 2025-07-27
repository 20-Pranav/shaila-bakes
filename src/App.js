import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CakesAndClasses from "./pages/CakesAndClasses";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="bg-gray-50 min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cakes" element={<CakesAndClasses />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
