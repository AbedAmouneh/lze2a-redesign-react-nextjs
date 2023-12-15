import "./App.scss";
import Shop from "./components/shop/Shop.jsx";
import Product from "./components/Item/product.jsx";
import AboutUs from "./Pages/AboutUsPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginModal from "./Components/auth/Login/Login.jsx";
import Navbar from "./Components/Item/Navbar.jsx";

function App() {
  return (
    <div>
      <LoginModal isOpen={false} onClose={() => {}} />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
