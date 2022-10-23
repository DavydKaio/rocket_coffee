import React, { useState } from "react";

import "./App.css";

import Header from "../components/Header/Header";
import Main from "../components/Content/Main";

export default function App(props) {
  const [menuButton, setMenuBotton] = useState(false);

  return (
    <>
      <div className="app">
        <Header />
        <Main />
      </div>

      <div className="mobile">
        <Header menuButton={menuButton} setMenuBotton={setMenuBotton} />
        <Main menuButton={menuButton} />
      </div>
    </>
  );
}
