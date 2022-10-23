import React from "react";

import "./Main.css";

import Coffee from "../../assets/rocket-coffee.png";
import Arrow from "../../assets/arrow.svg";

function mobileComponent() {
  return (
    <div className="contentMobile">
      <div className="containerTitleMobile">
        <h1 className="titleMobile">
          O café que fará seu código decolar para o próximo nível.
        </h1>
      </div>

      <div className="containerButtonMobile">
        <button type="button" className="buttonMobile">
          PEGAR MEU CAFÉ <img className="arrow" src={Arrow} alt="" />
        </button>
      </div>

      <div className="containerSubtitleMobile">
        <h1 className="subtitleMobile">Great Coffee</h1>
        <h1 className="subtitleMobileStroke">&lt;Great Code/&gt;</h1>
      </div>

      <img src={Coffee} alt="Rocket Coffee" />
    </div>
  );
}

function menuAsideMobile() {
  return (
    <div className="sidenav">
      <a href="/#" className="ativo">
        Home
      </a>
      <a href="/#">Menu</a>
      <a href="/#">Recompensas</a>
      <a href="/#">Gift Cards</a>
      <a href="/#">Lojas</a>
    </div>
  );
}

export default function Main(props) {
  return (
    <>
      <div className="content">
        <h1 className="title">Great Coffee</h1>
        <h1 className="subTitle">&lt;Great Code/&gt;</h1>

        <img src={Coffee} alt="Rocket Coffee" />
      </div>

      {!props.menuButton ? mobileComponent() : menuAsideMobile()}
    </>
  );
}
