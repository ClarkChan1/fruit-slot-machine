import "./message.css";
function Message({ message }) {
  return (
    <div className="message-container">
      <p>{message}</p>
    </div>
  );
}
export default Message;
