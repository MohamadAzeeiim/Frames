import React from "react";
import "./App.css"; // Keep this for global styles (optional)
import Navbar from "./components/Navbar"; // Import Navbar component
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <>
      <Navbar /> 
      <HeroSection />
    </>
  );
};

export default App;

