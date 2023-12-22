import "./menu.css";
import {
  fruitMapping,
  costToPlay,
  twoMatchPrize,
  threeMatchPrize,
} from "../utils/globals";
import { useState } from "react";
function Menu({
  updateSlot1,
  updateSlot2,
  updateSlot3,
  isSpinning,
  updateIsSpinning,
  updateMessage,
}) {
  const [coins, updateCoins] = useState(100);
  function handleSpin() {
    let newCoinValue = coins - costToPlay;
    updateIsSpinning(true);
    updateMessage("spinning...");
    updateCoins(newCoinValue);
    updateSlot1("blank");
    updateSlot2("blank");
    updateSlot3("blank");
    let newSlotValues = [];
    for (let i = 0; i < 3; i++) {
      let slotValue = Math.floor(Math.random() * 8) + 1;
      let imgSrc = fruitMapping[slotValue];
      newSlotValues.push(imgSrc);
    }

    console.log("slotvalues: ", newSlotValues);
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

    setTimeout(() => {
      updateSlot1(newSlotValues[0]);
    }, 1000);
    setTimeout(() => {
      updateSlot2(newSlotValues[1]);
    }, 1500);
    setTimeout(() => {
      updateSlot3(newSlotValues[2]);
      updateCoins(newCoinValue);
      updateMessage(newMessage);
      updateIsSpinning(false);
    }, 2000);
  }
  return (
    <div className="menu-container">
      <div className="coins-container">
        <img className="coin-img" src="/images/coin.svg" alt="" />
        <p>{coins}</p>
      </div>
      <button
        className={"spin-button " + (isSpinning ? "disabled" : "")}
        onClick={handleSpin}
      >
        {isSpinning ? "--" : "Spin"}
      </button>
    </div>
  );
}
export default Menu;
