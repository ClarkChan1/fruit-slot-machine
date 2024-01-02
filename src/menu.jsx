import "./menu.css";
import {
  fruitMapping,
  costToPlay,
  twoMatchPrize,
  threeMatchPrize,
} from "../utils/globals";
function Menu({
  updateSlot1,
  updateSlot2,
  updateSlot3,
  updateSlotMatches,
  coins,
  updateCoins,
  isSpinning,
  updateIsSpinning,
  updateMessage,
  updateYouLose,
  updateStats,
  updateShowRules,
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
      updateSlotMatches([0, 0, 0]);
      updateSlot1("blank");
      updateSlot2("blank");
      updateSlot3("blank");
      let newSlotValues = [];
      let newSlotMatches = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        let slotValue = Math.floor(Math.random() * 8) + 1;
        newSlotValues.push(slotValue);
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
        newSlotMatches = [1, 1, 1];
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
        // find which two match
        if (newSlotValues[0] == newSlotValues[1]) {
          newSlotMatches = [1, 1, 0];
        } else if (newSlotValues[0] == newSlotValues[2]) {
          newSlotMatches = [1, 0, 1];
        } else {
          newSlotMatches = [0, 1, 1];
        }
      } else {
        newMessage = "no match";
      }

      setTimeout(() => {
        updateSlot1(fruitMapping[newSlotValues[0]]);
      }, 1000);
      setTimeout(() => {
        updateSlot2(fruitMapping[newSlotValues[1]]);
      }, 1500);
      setTimeout(() => {
        updateSlot3(fruitMapping[newSlotValues[2]]);
        updateCoins(newCoinValue);
        updateMessage(newMessage);
        updateSlotMatches(newSlotMatches);
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
      <div className="spin-button-container">
        <button
          className={"spin-button " + (isSpinning ? "disabled" : "")}
          onClick={handleSpin}
        >
          {isSpinning ? "--" : "Spin"}
        </button>
      </div>
      <div className="help-container" onClick={() => updateShowRules(true)}>
        <p>Rules</p>
      </div>
    </div>
  );
}
export default Menu;
