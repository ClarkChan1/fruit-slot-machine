import "./menu.css";
import fruitMapping from "../globals";
function Menu({ updateSlotValues }) {
  function handleSpin() {
    let newSlotValues = [];
    for (let i = 0; i < 3; i++) {
      let slotValue = Math.floor(Math.random() * 8) + 1;
      let imgSrc = fruitMapping[slotValue];
      newSlotValues.push(imgSrc);
    }
    updateSlotValues(newSlotValues);
    console.log("slotvalues: ", newSlotValues);
  }
  return (
    <div className="menu-container">
      <div className="coins"></div>
      <button className="spin-button" onClick={handleSpin}>
        Spin
      </button>
    </div>
  );
}
export default Menu;
