import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Slots from "./slots";
import Menu from "./menu";
import Message from "./message";
import {
  defaultMessage,
  defaultCoins,
  defaultSlot1,
  defaultStats,
} from "../utils/globals";
import YouLose from "./youLose";
import Rules from "./rules";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
  const [slot1, updateSlot1] = useState(defaultSlot1);
  const [slot2, updateSlot2] = useState(defaultSlot1);
  const [slot3, updateSlot3] = useState(defaultSlot1);
  const [coins, updateCoins] = useState(defaultCoins);
  const [isSpinning, updateIsSpinning] = useState(false);
  const [message, updateMessage] = useState(defaultMessage);
  const [youLose, updateYouLose] = useState(false);
  const [stats, updateStats] = useState(defaultStats);
  const [showRules, updateShowRules] = useState(false);
  function resetGame() {
    console.log("reset game called");
    updateCoins(defaultCoins);
    updateSlot1(defaultSlot1);
    updateSlot2(defaultSlot1);
    updateSlot3(defaultSlot1);
    updateMessage(defaultMessage);
    updateStats(defaultStats);
    updateYouLose(false);
  }
  return youLose ? (
    <YouLose stats={stats} resetGame={resetGame} />
  ) : showRules ? (
    <Rules updateShowRules={updateShowRules} />
  ) : (
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
          coins={coins}
          updateCoins={updateCoins}
          isSpinning={isSpinning}
          updateIsSpinning={updateIsSpinning}
          updateMessage={updateMessage}
          updateYouLose={updateYouLose}
          updateStats={updateStats}
        />
      </div>
      <div className="help-container" onClick={() => updateShowRules(true)}>
        <p>Rules</p>
      </div>
    </div>
  );
}
