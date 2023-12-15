import "./App.scss";
import Shop from "./components/shop/Shop.jsx";
import Product from "./components/Item/product.jsx";
import AboutUs from "./Pages/AboutUsPage.jsx";
import { Route, Routes } from "react-router-dom";
import LoginModal from "./Components/auth/Login/Login.jsx";
import Navbar from "./Components/Item/Navbar.jsx";
import RegisterModal from "./Components/auth/Register/Register.jsx";
import { useState } from "react";

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
        <Route
          path="/"
          exact
          element={
            <div>
              <h1>Home Page</h1>
            </div>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
