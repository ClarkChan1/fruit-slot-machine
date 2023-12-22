import "./menu.css";
import {
  fruitMapping,
  costToPlay,
  twoMatchPrize,
  threeMatchPrize,
} from "../utils/globals";
import { useState } from "react";
function Menu({ updateSlotValues, updateMessage }) {
  const [coins, updateCoins] = useState(100);
  function handleSpin() {
    let newSlotValues = [];
    for (let i = 0; i < 3; i++) {
      let slotValue = Math.floor(Math.random() * 8) + 1;
      let imgSrc = fruitMapping[slotValue];
      newSlotValues.push(imgSrc);
    }
    updateSlotValues(newSlotValues);
    console.log("slotvalues: ", newSlotValues);
    let newCoinValue = coins - costToPlay;
    let newMessage = "";
    // check if all 3 match
    if (
      newSlotValues[0] == newSlotValues[1] &&
      newSlotValues[0] == newSlotValues[2] &&
      newSlotValues[1] == newSlotValues[2]
    ) {
      newCoinValue += threeMatchPrize;
      newMessage = "Jackpot!!!";
    }
    // check if 2 match
    else if (
      newSlotValues[0] == newSlotValues[1] ||
      newSlotValues[0] == newSlotValues[2] ||
      newSlotValues[1] == newSlotValues[2]
    ) {
      newCoinValue += twoMatchPrize;
      newMessage = "2 match!";
    } else {
      newMessage = "no match";
    }
    updateCoins(newCoinValue);
    updateMessage(newMessage);
  }
  return (
    <div className="menu-container">
      <div className="coins-container">
        <img className="coin-img" src="/images/coin.svg" alt="" />
        <p>{coins}</p>
      </div>
      <button className="spin-button" onClick={handleSpin}>
        Spin
      </button>
    </div>
  );
}
export default Menu;
