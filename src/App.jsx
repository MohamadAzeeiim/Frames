import React from "react";
import "./App.css"; // Keep this for global styles (optional)
import Navbar from "./components/Navbar"; // Import Navbar component
import HeroSection from "./components/HeroSection";
import CardSection from "./components/CardSection/CardSection";

const App = () => {
  return (
    <>
      <Navbar /> 
      <HeroSection />
      <CardSection/>
    </>
  );
};

export default App;

