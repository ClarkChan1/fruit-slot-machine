import { useEffect, useState } from "react";
import "./slots.css";
function Slots({ slot1, slot2, slot3, slotMatches }) {
  const [isJackpot, updateIsJackpot] = useState(true);
  const [noMatches, updateNoMatches] = useState(true);
  useEffect(() => {
    updateIsJackpot(slotMatches.reduce((prev, curr) => prev + curr) == 3);
    updateNoMatches(slotMatches.reduce((prev, curr) => prev + curr) == 0);
  }, [slotMatches]);
  return (
    <div className="slots-container">
      <div
        className={
          "fruit-holder " +
          (isJackpot
            ? "jackpot "
            : noMatches
            ? ""
            : slotMatches[0] == 1
            ? "match2"
            : "")
        }
      >
        <img
          className={"fruit " + (slot1 == "blank" ? "hide-img" : "")}
          src={slot1}
          alt=""
        />
      </div>
      <div
        className={
          "fruit-holder " +
          (isJackpot
            ? "jackpot "
            : noMatches
            ? ""
            : slotMatches[1] == 1
            ? "match2"
            : "")
        }
      >
        <img
          className={"fruit " + (slot2 == "blank" ? "hide-img" : "")}
          src={slot2}
          alt=""
        />
      </div>
      <div
        className={
          "fruit-holder " +
          (isJackpot
            ? "jackpot "
            : noMatches
            ? ""
            : slotMatches[2] == 1
            ? "match2"
            : "")
        }
      >
        <img
          className={"fruit " + (slot3 == "blank" ? "hide-img" : "")}
          src={slot3}
          alt=""
        />
      </div>
    </div>
  );
}
export default Slots;
