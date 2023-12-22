import "./slots.css";
function Slots({ slot1, slot2, slot3 }) {
  return (
    <div className="slots-container">
      <div className="fruit-holder">
        <img
          className={"fruit " + (slot1 == "blank" ? "hide-img" : "")}
          src={slot1}
          alt=""
        />
      </div>
      <div className="fruit-holder">
        <img
          className={"fruit " + (slot2 == "blank" ? "hide-img" : "")}
          src={slot2}
          alt=""
        />
      </div>
      <div className="fruit-holder">
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
