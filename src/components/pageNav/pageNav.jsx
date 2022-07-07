import React, { useState } from "react";
import "./pageNav.scss";
import Castle from "../../visual assets/cloud-castle-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export default function PageNav() {
  const [menu, setMenu] = useState(false);

  const handleMenuOpen = () => {
    setMenu(true);
  };
  const handleMenuClose = () => {
    setMenu(false);
  };

  return (
    <div className="header">
      <Link to={"/books"}>
        <div className="back-arrow-container">
          <FontAwesomeIcon
            alt="dropdown menu icon"
            className="arrow-left"
            icon={faArrowLeft}
            onClick={handleMenuOpen}
          />
          <p className="nav-back"> 📚</p>
        </div>
      </Link>

      <h3 className="currently-reading">Currently reading The Great Gatsby</h3>
      <Link to={"/"}>
        <h1 className="nav-main-header">Leyenda</h1>
      </Link>
      <nav className={`header__nav ${menu ? "header__nav--open" : ""}`}>
        <div className="header__nav-heading">
          <span
            className="header__nav-heading--close"
            onClick={handleMenuClose}
          ></span>
        </div>
        <div className="header__nav-list">
          <div className="header__nav-list-items">
            <Link
              to={"/books"}
              onClick={handleMenuClose}
              className="header__nav-list-items--link"
            >
              <h3>Gallery</h3>
            </Link>
            <span className={`header__nav-list--arrow`}>^</span>
          </div>
          <div className="header__nav-list-items">
            <Link
              to={"/data-science"}
              onClick={handleMenuClose}
              className="header__nav-list-items--link"
            >
              <h3>Dashboard</h3>
            </Link>
            <span className={`header__nav-list--arrow`}>^</span>
          </div>
          <div className="header__nav-list-items">
            <Link
              to={"/marketing"}
              onClick={handleMenuClose}
              className="header__nav-list-items--link"
            >
              <h3>Notebook</h3>tml
            </Link>
            <span className={`header__nav-list--arrow `}>^</span>
          </div>
          <div className="header__nav-list-items">
            <Link
              to={"/ux-ui"}
              onClick={handleMenuClose}
              className="header__nav-list-items--link"
            ></Link>
            <span className={`header__nav-list--arrow `}>^</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
