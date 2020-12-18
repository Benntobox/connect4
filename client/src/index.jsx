import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTurn: 1,
      height: 6,
      width: 7,
      board: []
    }
    this.init(); // makes board
  }

  init() {
    let board = [];
    for (let y = 0; y < this.state.height; y++) {
      let row = [];
      for (let x = 0; x < this.state.width; x++) {
        //row[x] = 0;
      }
      board[y] = row;
    }
    this.setState({board: board})
  }

  play(x) {
    console.log('Play ', x)
    let y = 0; 
    while (y < this.state.height) {
      if (board[y][x] === 0 && board[y+1][x] > 0 || y === this.state.height - 1) {
        this.setState({board});
      } else {
        y++;
      }
    }
    if (x >= 0 && x < this.state.width && y >= 0 && y < this.state.height) {
      this.setSquare(x, y);
    }
  }

  setSquare(x, y) {
    let board = this.state.board;
    board[y][x] = this.state.currentTurn;
    this.setState({board: board})
  }

  next() {
    this.setState({currentTurn: this.state.currentTurn === 1 ? 2 : 1})
  }

  render() {
    return (
      <div>
        <Board />
        {[...Array(7).keys()].map(x => (<button onClick={this.play.bind(this, x)}>{x}</button>))}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));