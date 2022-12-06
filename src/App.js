import React from "react";
import HomePage from "./components/homePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import PropostaHome from "./components/propostaHome/PropostaHome";
import Footer from "./components/footer/Footer";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <PropostaHome />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
