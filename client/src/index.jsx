import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTurn: 1,
      board: this.init()
    }
  }

  init() {
    let board = [];
    for (let y = 0; y < 6; y++) {
      let row = [];
      for (let x = 0; x < 7; x++) {
        row[x] = x * 10;
      }
      board[y] = row;
    }
    return board;
  }

  play(x) {
    console.log('Play ', x)
    let y = 0; 
    while (y < this.state.height) {
      if (this.state.board[y][x] === 0 && y === this.state.height - 1 || this.state.board[y+1][x] > 0) {
        this.setSquare(x, y);
      } else {
        y++;
      }
    }
  }

  get(x, y) {
    return this.state.board[y][x];
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
        <Board board={this.state.board} play={this.play.bind(this)}/>
        {[...Array(7).keys()].map(x => (<button onClick={this.play.bind(this, x)}>{x}</button>))}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));