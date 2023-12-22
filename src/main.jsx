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
  const [slot1, updateSlot1] = useState([fruitMapping[1]]);
  const [slot2, updateSlot2] = useState([fruitMapping[1]]);
  const [slot3, updateSlot3] = useState([fruitMapping[1]]);
  const [isSpinning, updateIsSpinning] = useState(false);
  const [message, updateMessage] = useState("press spin to play");
  return (
    <div className="main-container">
      <p className="title">Fruit Slot Machine</p>
      <div className="game-container">
        <Message message={message} />
        <Slots
          isSpinning={isSpinning}
          slot1={slot1}
          slot2={slot2}
          slot3={slot3}
        />
        <Menu
          updateSlot1={updateSlot1}
          updateSlot2={updateSlot2}
          updateSlot3={updateSlot3}
          isSpinning={isSpinning}
          updateIsSpinning={updateIsSpinning}
          updateMessage={updateMessage}
        />
      </div>
    </div>
  );
}
