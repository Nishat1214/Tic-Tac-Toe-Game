const Message = ({ winner, onNewGame }) => {
    if (!winner) return null;

    return (
        <div className="msg-container">
            <p id="msg">
                {winner === 'draw' ? "It's a Draw!" : `Winner: ${winner}`}
            </p>
            <button id="newgame" onClick={onNewGame}>
                New game
            </button>
        </div>
    );
};

export default Message;