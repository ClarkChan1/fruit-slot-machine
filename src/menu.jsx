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
  coins,
  updateCoins,
  isSpinning,
  updateIsSpinning,
  updateMessage,
  updateYouLose,
  updateStats,
}) {
  function hasCoins() {
    return coins >= 10;
  }
  function handleSpin() {
    if (hasCoins()) {
      let statChanges = {
        rolls: 1,
        match2: 0,
        jackpot: 0,
        coinsLost: -10,
        coinsEarned: 0,
      };
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

      let newMessage = "";
      // check if all 3 match
      if (
        newSlotValues[0] == newSlotValues[1] &&
        newSlotValues[0] == newSlotValues[2] &&
        newSlotValues[1] == newSlotValues[2]
      ) {
        newCoinValue += threeMatchPrize;
        newMessage = "Jackpot!!!";
        statChanges.jackpot = 1;
        statChanges.coinsEarned = 150;
      }
      // check if 2 match
      else if (
        newSlotValues[0] == newSlotValues[1] ||
        newSlotValues[0] == newSlotValues[2] ||
        newSlotValues[1] == newSlotValues[2]
      ) {
        newCoinValue += twoMatchPrize;
        newMessage = "2 match!";
        statChanges.match2 = 1;
        statChanges.coinsEarned = 25;
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
        updateStats((prevStats) => ({
          ...prevStats,
          rolls: prevStats.rolls + statChanges.rolls,
          match2: prevStats.match2 + statChanges.match2,
          jackpot: prevStats.jackpot + statChanges.jackpot,
          coinsLost: prevStats.coinsLost + statChanges.coinsLost,
          coinsEarned: prevStats.coinsEarned + statChanges.coinsEarned,
        }));
        updateIsSpinning(false);
      }, 2000);
    } else {
      updateYouLose(true);
    }
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
