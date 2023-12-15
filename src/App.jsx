import "./App.scss";
import Shop from "./components/shop/Shop.jsx";
import Product from "./components/Item/product.jsx";
import AboutUs from "./Pages/AboutUsPage.jsx";
import { Link, Route, Routes } from "react-router-dom";
import LoginModal from "./Components/auth/Login/Login.jsx";
import Navbar from "./Components/Item/Navbar.jsx";
import RegisterModal from "./Components/auth/Register/Register.jsx";
import { useState } from "react";
import { Home } from "./Pages/Home.jsx";
import { Footer } from "./Components/footer/footer.jsx";
import { NotFound } from "./Pages/NotFound.jsx";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        openLoginModal={() => setIsLoginOpen(true)}
      />
      <Navbar openRegisterModal={() => setIsRegisterOpen(true)} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
