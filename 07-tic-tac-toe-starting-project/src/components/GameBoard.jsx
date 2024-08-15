import { useState } from "react";



export default function GameBoard({
  onSelectSquare,
  board,
  activePlayerSymbol,
}) {


  // const [gameBoard , setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //         const updateboard = prevGameBoard.map(innerArray => [...innerArray]);
  //         updateboard[rowIndex][colIndex] = activePlayerSymbol;
  //         return updateboard;
  //     });
  //     onSelectSquare();
  // }
  
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
