import "./slots.css";
function Slots() {
  return (
    <div className="slots-container">
      <div className="fruit-holder">
        <img className="fruit" src="../images/apple.svg" alt="" />
      </div>
      <div className="fruit-holder">
        <img className="fruit" src="../images/grape.svg" alt="" />
      </div>
      <div className="fruit-holder">
        <img className="fruit" src="../images/orange.svg" alt="" />
      </div>
    </div>
  );
}
export default Slots;
