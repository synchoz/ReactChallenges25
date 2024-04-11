import React,{useState, useRef} from "react";
import './style.css';

export default function TicTacToe() {
    const gameStatusEle = useRef(null)
    const [playerTurn, setPlayerTurn] = useState('X');
    const [playerWins, setPlayerWins] = useState(false);
    const [gameMsg, setGameMsg] = useState(`Player Turn ${playerTurn}`);
    const [isDraw, setIsDraw] = useState(false);
    const [board, setBoard] = useState([
        [{value:2,playerTurn:""},{value:7,playerTurn:""},{value:6,playerTurn:""}],
        [{value:9,playerTurn:""},{value:5,playerTurn:""},{value:1,playerTurn:""}],
        [{value:4,playerTurn:""},{value:3,playerTurn:""},{value:8,playerTurn:""}]
    ]);

    function handleClick(e) {
        if(board[e.target.dataset.i][e.target.dataset.j].playerTurn != '' || playerWins || isDraw) {
            return;
        }
        const nextPlayerTurn = playerTurn == 'X' ? 'O' : 'X';
        const tempBoard = [...[...board]];
        tempBoard[e.target.dataset.i][e.target.dataset.j].playerTurn = playerTurn;
        setBoard(tempBoard);
        setPlayerTurn(nextPlayerTurn);
        if(checkPlayerWin(tempBoard,playerTurn)) {
            setPlayerWins(true);
            setGameMsg(`${playerTurn} Has won the game!`)
        } else if(checkIfDraw(tempBoard)) {
            setIsDraw(true);
            setGameMsg(`Its a draw!`)
        } else {
            setGameMsg(`Player Turn ${nextPlayerTurn}`)
        }
    }    

    function checkPlayerWin(tempBoard, currPlayer) {
        let playerWins = false;
        
        for (let row = 0; row < tempBoard.length; row++) {
            let colSum = 15;
            let rowSum = 15;
            for (let column = 0; column < tempBoard.length; column++) {
                tempBoard[row][column].playerTurn == currPlayer ? colSum -= tempBoard[row][column].value : colSum -= 0;
                tempBoard[column][row].playerTurn == currPlayer ? rowSum -= tempBoard[column][row].value : rowSum -= 0;
                console.log('colSum:',colSum)
                console.log('rowSum:',rowSum)
                
            }
            if (colSum == 0 || rowSum == 0) {
                playerWins = true;
                break;
            }
            
        }

        if( (tempBoard[0][0].playerTurn == currPlayer &&
            tempBoard[1][1].playerTurn == currPlayer &&
            tempBoard[2][2].playerTurn == currPlayer ) ||
           (tempBoard[2][0].playerTurn == currPlayer &&
            tempBoard[1][1].playerTurn == currPlayer &&
            tempBoard[0][2].playerTurn == currPlayer)) {
                playerWins = true;
        }

        return playerWins;
    }

    function checkIfDraw(tempBoard) {
        let isDraw = false;
        const totalSum = tempBoard.reduce((acc, row) => {
            return acc + row.reduce((rowAcc, cell) => cell.playerTurn != '' ?  rowAcc + cell.value : rowAcc + 0, 0);
        }, 0);

        isDraw = totalSum == 45;
        return isDraw;
    }

    function handleRestart() {
        setBoard([
            [{value:2,playerTurn:""},{value:7,playerTurn:""},{value:6,playerTurn:""}],
            [{value:9,playerTurn:""},{value:5,playerTurn:""},{value:1,playerTurn:""}],
            [{value:4,playerTurn:""},{value:3,playerTurn:""},{value:8,playerTurn:""}]
        ]);
        setGameMsg(`Player Turn ${playerTurn}`)
        setPlayerWins(false);
        setIsDraw(false);
    }

    return(
        <div>
            <div className="boardContainer">
                {
                    board.map((row, i) => (
                        <div key={i} className="boardRow">
                            {
                                row.map((cell, j) => (
                                    <div key={j} className="boardItem" data-i={i} data-j={j} data-val={cell.value} onClick={handleClick}>
                                        {cell.playerTurn}
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
            <div className="gameMsg" ref={gameStatusEle}>{gameMsg}</div>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}