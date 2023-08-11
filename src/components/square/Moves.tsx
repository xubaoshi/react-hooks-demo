import React from 'react'

const Moves: React.FC<{history: any[];jumpTo: (move: number) => void}> = ({ jumpTo, history}) => {
  const moves = history.map((squares: string[], move:number) => {
    let description

    if (move > 0) {
      description = "Go to move #" + move
    } else {
      description = "Go to game start"
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })
  
  return <>{moves}</>
}

export default Moves