import React from "react";
import LogoEdison from "../img/edison-project-logo.png";
import { Link } from "react-router-dom";


function Header(props) {
  return (
    <div className="header">
      <Link className="logo-link" to="/">
        <img id="logo-edison" src={LogoEdison} alt="logo edison" />
      </Link>
    </div>
  );
}

export default Header;
