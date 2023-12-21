import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Slots from "./slots";
import Menu from "./menu";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
  return (
    <div className="main-container">
      <p className="title">Fruit Slot Machine</p>
      <Slots />
      <Menu />
    </div>
  );
}
