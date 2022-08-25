import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div data-collapse="medium" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar nav w-nav">
      <div className="container w-container">
        <nav role="navigation" className="nav-menu w-nav-menu">
          <Link to="/" data-w-id="82dd53a6-604c-584f-6a75-a762cfe4717f" aria-current="page" className="navbar nav-link-2 w-nav-link w--current">
            Home
          </Link>
          <Link to="/products" data-w-id="82dd53a6-604c-584f-6a75-a762cfe47181" className="nav-link-2 navbar w-nav-link">
            Products
          </Link>
          <Link to="/about-us" data-w-id="52da4953-b1c5-a711-35b9-d46ef3e4620e" className="nav-link-2 navbar w-nav-link">
            About Us
          </Link>
          <Link to="/contact" data-w-id="82dd53a6-604c-584f-6a75-a762cfe47183" className="nav-link-2 navbar w-nav-link">
            Contact Us
          </Link>
        </nav>
        <div className="menu-button w-nav-button">
          <div data-w-id="5f7faeca-53f0-fb03-c7bb-1afab697b620" className="burger-button-wrapper">
            <div className="burger-line-top" />
            <div className="burger-line-middle" />
            <div className="burger-line-bottom" />
          </div>
        </div>
        <Link to="/" aria-current="page" className="link-block-4 w-inline-block w--current">
          <img src="images/Flame-Logo.svg" loading="lazy" width={74} data-w-id="be3ae735-d787-556a-0035-565cb8c7a2b2" alt="" className="image-27" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
