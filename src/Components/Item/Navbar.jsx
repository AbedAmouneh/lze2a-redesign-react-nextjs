import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Navbar.scss";
import propTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div>
      <div className="top-navbar">
        <p>10% Off on your first order! Code: Lze2a10</p>
      </div>
      <nav className="navbar">
        <div className="left-navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="center-navbar ">
          <Link to="/">
            <img src="/logo.png" alt="Lze2a Logo" />
          </Link>
        </div>
        <div className="right-navbar">
          <div className="links">
            <Link to="/shop">Shop</Link>
            <Link to="/customize">Customize</Link>
          </div>

          <span className="icon">
            <Icon icon="material-symbols:search" />
          </span>
          <span
            className="icon"
            onClick={() => {
              props.openRegisterModal();
            }}
          >
            <Icon icon="iconamoon:profile-fill" />
          </span>
          <span className="icon">
            <Icon icon="clarity:heart-line" />
          </span>
          <span className="icon">
            <Icon icon="material-symbols:shopping-bag-outline" />
          </span>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  openRegisterModal: propTypes.func.isRequired,
};

export default Navbar;
