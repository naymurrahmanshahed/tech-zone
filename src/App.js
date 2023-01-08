import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Slider from "./components/Slider";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="app min-h-screen bg-gray-50 text-gray-600">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
