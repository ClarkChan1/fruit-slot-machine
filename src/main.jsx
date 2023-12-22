import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Slots from "./slots";
import Menu from "./menu";
import Message from "./message";
import { fruitMapping } from "../utils/globals";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
  const [slotValues, updateSlotValues] = useState([
    fruitMapping[1],
    fruitMapping[1],
    fruitMapping[1],
  ]);
  const [message, updateMessage] = useState("press spin to play");
  return (
    <div className="main-container">
      <p className="title">Fruit Slot Machine</p>
      <div className="game-container">
        <Message message={message} />
        <Slots slotValues={slotValues} />
        <Menu
          updateSlotValues={updateSlotValues}
          updateMessage={updateMessage}
        />
      </div>
    </div>
  );
}
