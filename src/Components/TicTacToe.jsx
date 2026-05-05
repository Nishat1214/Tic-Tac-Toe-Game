import { useState } from 'react';
import Box from './Box';
import './TicTacToe.css';

const TicTacToe = () => {
    const [boxes, setBoxes] = useState(Array(9).fill(""));
    const [turn0, setTurn0] = useState(true);
    const [winner, setWinner] = useState(null);

    const patterns = [
        [0, 1, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [6, 4, 2],
    ];

    const checkWinner = () => {
        for (let pattern of patterns) {
            const pos1 = boxes[pattern[0]];
            const pos2 = boxes[pattern[1]];
            const pos3 = boxes[pattern[2]];

            if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
                if (pos1 === pos2 && pos2 === pos3) {
                    setWinner(pos1);
                    return true;
                }
            }
        }

        const allFilled = boxes.every(box => box !== "");
        if (allFilled && winner === null) {
            setWinner("draw");
            return true;
        }

        return false;
    };

    const handleBoxClick = (index) => {
        if (boxes[index] !== "" || winner !== null) return;

        const newBoxes = [...boxes];

        if (turn0) {
            newBoxes[index] = "O";
            setBoxes(newBoxes);
            setTurn0(false);
        } else {
            newBoxes[index] = "X";
            setBoxes(newBoxes);
            setTurn0(true);
        }

        setTimeout(() => {
            checkWinner();
        }, 0);
    };

    const resetGame = () => {
        setBoxes(Array(9).fill(""));
        setTurn0(true);
        setWinner(null);
    };

    return (
        <div className="game-container">
            <h1>Tic Tac Toe Game</h1>

            <div className="turn-indicator">
                {!winner && <p>Player {turn0 ? "O" : "X"}'s Turn</p>}
                {winner === "draw" && <p>It's a Draw!</p>}
                {winner && winner !== "draw" && <p>Winner: {winner}! 🎉</p>}
            </div>

            <div className="board">
                {boxes.map((value, index) => (
                    <Box
                        key={index}
                        value={value}
                        onClick={() => handleBoxClick(index)}
                        disabled={value !== "" || winner !== null}
                    />
                ))}
            </div>

            <button className="reset-btn" onClick={resetGame}>
                Reset Game
            </button>
        </div>
    );
};

export default TicTacToe;