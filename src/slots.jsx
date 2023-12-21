import "./slots.css";
function Slots({ slotValues }) {
  return (
    <div className="slots-container">
      <div className="fruit-holder">
        <img className="fruit" src={slotValues[0]} alt="" />
      </div>
      <div className="fruit-holder">
        <img className="fruit" src={slotValues[1]} alt="" />
      </div>
      <div className="fruit-holder">
        <img className="fruit" src={slotValues[2]} alt="" />
      </div>
    </div>
  );
}
export default Slots;
