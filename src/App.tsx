import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="cocktail/:id" element={<SingleCocktail />}  />
      </Routes>
    </div>
  );
}

export default App;
