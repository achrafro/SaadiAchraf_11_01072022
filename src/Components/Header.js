import React from "react";
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import logourl from '../style/img/logo.svg';

const Header = () => {
  return (
    <div className="Header">
 
      <Link to="/kasa">
        <div className="header-logo">
          <img src={logourl} className="logo"></img>
          
        </div>
      </Link>
      <div className="header-lists">
        <ul>
          <li>
            <Link to="/kasa" className="navlinkk">
              Accueil
            </Link> 
          </li>
          <li>
            <Link to="/kasa/About" className="navlinkk">
              
              A propos 
            </Link>
          </li>
        </ul>
      </div>
    

    </div>
  );
};

export default Header;
