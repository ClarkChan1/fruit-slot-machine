import "./rules.css";
function Rules({ updateShowRules }) {
  return (
    <div className="rules-container">
      <p className="title">Rules</p>
      <div className="rules">
        <p>1. start with 100 tokens</p>
        <p>2. spinning costs 10 tokens</p>
        <p>3. Award 25 tokens for matching 2 fruits</p>
        <p>4. Award 150 tokens for matching 3 fruits</p>
        <p>5. If you run out of tokens you lose</p>
      </div>
      <div className="close-rules-container">
        <p className="close-button" onClick={() => updateShowRules(false)}>
          Go Back
        </p>
      </div>
    </div>
  );
}
export default Rules;
