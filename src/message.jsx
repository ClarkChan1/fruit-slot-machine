import "./message.css";
function Message({ message }) {
  return (
    <div className={"message-container"}>
      <p className={message == "Jackpot!!!" ? "fast-blink" : ""}>{message}</p>
    </div>
  );
}
export default Message;
