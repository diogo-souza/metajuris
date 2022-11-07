import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Data from "./components/data/Data";
import Cloud from "./components/cloud/Cloud";
import Footer from "./components/footer/Footer";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
