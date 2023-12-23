import "./youLose.css";
function YouLose({ resetGame, stats }) {
  return (
    <div className="you-lose-container">
      <p className="title">No More Coins!</p>
      <div className="stats-container">
        <div className="stat-row">
          <p>Rolls</p>
          <p>{stats.rolls}</p>
        </div>
        <div className="stat-row">
          <p>match 2</p>
          <p>{stats.match2}</p>
        </div>
        <div className="stat-row">
          <p>Jackpot</p>
          <p>{stats.jackpot}</p>
        </div>
        <div className="stat-row">
          <p>Coins Lost</p>
          <p>{stats.coinsLost}</p>
        </div>
        <div className="stat-row">
          <p>Coins Earned</p>
          <p>{stats.coinsEarned}</p>
        </div>
      </div>
      <div className="play-again-container">
        <p className="play-button" onClick={resetGame}>
          Play Again
        </p>
      </div>
    </div>
  );
}
export default YouLose;
