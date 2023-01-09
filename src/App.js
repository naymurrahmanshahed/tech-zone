import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Slider from "./components/Slider";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <div className="app min-h-screen bg-gray-50 text-gray-700">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
