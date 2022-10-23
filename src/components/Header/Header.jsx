import React from "react";

import "./Header.css";

import Logo from "../../assets/logo-desktop.svg";
import LogoMobile from "../../assets/logo-mobile.svg";
import MenuOpen from "../../assets/menu-buguer-open.svg";
import MenuClose from "../../assets/menu-buguer-close.svg";

export default function Header(props) {
  return (
    <>
      <div className="container">
        <a href="/#">
          <img src={Logo} alt="logo" />
        </a>

        <ul className="navList">
          <li className="navItem">
            <a href="/#" className="navLink">
              Home
            </a>
          </li>
          <li className="navItem">
            <a href="/#" className="navLink">
              Menu
            </a>
          </li>
          <li className="navItem">
            <a href="/#" className="navLink">
              Recompensas
            </a>
          </li>
          <li className="navItem">
            <a href="/#" className="navLink">
              Gift Cards
            </a>
          </li>
          <li className="navItem">
            <a href="/#" className="navLink">
              Lojas
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="button"
          onClick={() => alert("button")}>
          PEGAR MEU CAFÉ
        </button>
      </div>

      <div className="containerMobile">
        <a href="/#">
          <img src={LogoMobile} alt="" />
        </a>
        <button
          value={props.menuButton}
          type="button"
          className="menuButton"
          onClick={() => props.setMenuBotton(!props.menuButton)}>
          <img src={props.menuButton ? MenuClose : MenuOpen} alt="" />
        </button>
      </div>
    </>
  );
}
