import {useState, useEffect} from "react";
import Moves from '../components/square/Moves'
import Board from '../components/square/Board'
import './game.less'

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] =  useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    setXIsNext(!xIsNext)
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove)
    setXIsNext(nextMove%2 === 0)
  }

  useEffect(() => {
    alert('1111')
  }, [xIsNext])

  return <>
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>
          <Moves history={history} jumpTo={jumpTo}/>
        </ol>
      </div>
    </div>
  </>
}