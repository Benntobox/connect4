import React from 'react';
import Row from './Row.jsx' 

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
    <div className="board">
      {this.props.board.map((row, y) => <Row row={row} y={y}/>)}
    </div>
    )
  }
}

export default Board;
