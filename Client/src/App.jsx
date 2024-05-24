import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./assets/page/HomePage";
import ADDproductPage from "./assets/page/AddProductPage";
import ProductDetailsPage from "./assets/page/ProductDetailsPage";
import NotFoundPage from "./assets/page/NotFoundPage";
import Header from "./assets/layout/Header";
import Footer from "./assets/layout/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<ADDproductPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    
    </>
  );
}

export default App;
