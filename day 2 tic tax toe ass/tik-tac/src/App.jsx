
import { useEffect, useState } from 'react'
import './App.css'
import { SquareCom } from './components/squareCom'

const initial = ["", "", "", "", "", "", "", "", ""]

function App() {
  const [game, setGame] = useState(initial);
  const [isXchance, setX] = useState(false);

  const onSquareClicked = (index) => {
    let strings = Array.from(game);
    strings[index] = isXchance ? "X" : "0";
    setGame(strings);
    setX(!isXchance);
  }
  useEffect(()=>{
const winner=checkWinner();
if(winner){
  alert(`woo ${winner} has won the game`)
  setGame(initial)
}
  },[game])

  const checkWinner=()=>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
    }
}
return null;

  }
  return (
    <div className="app-header">
      <p className='heading-text'>Tic Tac Toe</p>
      <div className='row jc-center'>
        <SquareCom className="b-bottom-right" state={game[0]} onClick={() => onSquareClicked(0)} />
        <SquareCom className="b-bottom-right" state={game[1]} onClick={() => onSquareClicked(1)} />
        <SquareCom className="b-bottom" state={game[2]} onClick={() => onSquareClicked(2)} />
      </div>

      <div className='row jc-center'>
        <SquareCom className="b-bottom-right" state={game[3]} onClick={() => onSquareClicked(3)} />
        <SquareCom className="b-bottom-right" state={game[4]} onClick={() => onSquareClicked(4)} />
        <SquareCom className="b-bottom" state={game[5]} onClick={() => onSquareClicked(5)} />

      </div>

      <div className='row jc-center'>

        <SquareCom className="b-right" state={game[6]} onClick={() => onSquareClicked(6)} />
        <SquareCom className="b-right" state={game[7]} onClick={() => onSquareClicked(7)} />
        <SquareCom state={game[8]} onClick={() => onSquareClicked(8)} />
      </div>
      <button className='button' onClick={()=>setGame(initial)} >Clear Game</button>
      <p className='fc-aqua fw-600'>Sumit Narwal</p>

    </div>
  )
}

export default App
