import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HomePage from "./HomePage";
import EnquiryPage from "./EnquiryPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";

export default function Home() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      </div>
    </Router>
  );
}
