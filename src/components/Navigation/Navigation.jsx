import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation_wrapper">
      <div className="navigation__logo">
        <img src="/Logo.png" alt="logo" />
      </div>
      <div className="navigation__libary">
        <h2 className="navigation__title title">Library</h2>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__itemList itemList1">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__itemList itemList2">
              <Link to="/trends">Trends</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
