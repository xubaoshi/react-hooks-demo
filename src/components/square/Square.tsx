import React from 'react'

const Square: React.FC<{value: String; onSquareClick: () => void}> = ({value,onSquareClick}) => {
  return <button className="square" onClick={onSquareClick}>{ value }</button>
}

export default Square