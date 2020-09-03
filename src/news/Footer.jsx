import React from "react";

import { Link } from "react-router-dom"

const Footer = () => (
  <nav className="navbar fixed-bottom navbar-expand navbar-dark bg-primary mt-3">

  <div className=" " id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/news">News</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link " to="/news/create">Submit an Article</Link>
      </li>
    </ul>
  </div>
</nav>
);

export default Footer; 