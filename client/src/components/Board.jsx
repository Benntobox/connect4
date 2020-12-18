import React from 'react';
import Row from './Row.jsx' 

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  setSquare(x, y) {

  }

  render() {
    return (
    <div className="board">
      {[...Array(6).keys()].map(x => <Row x={x}/>)}
    </div>
    )
  }
}

export default Board;
