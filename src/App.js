import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Err404 from "./pages/Err404";

 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Default page there is no route */}
        <Route path="*" element={<Err404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
