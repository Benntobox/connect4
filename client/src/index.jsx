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
    for (let y = 0; y < 7; y++) {
      let row = [];
      for (let x = 0; x < 6; x++) {
        row[x] = 0;
      }
      board[y] = row;
    }
    return board;
  }

  play(x) {
    let y = 0; 
    while (y < 6) {
      console.log('Play ', this.get(x, y))
      if (this.get(x, y) === 0 && this.get(x, y+1) > 0 || y === 5) {
        console.log('SETTING ', x, ',', y)
        this.set(x, y);
        this.next();
        return;
      } else {
        y++;
      }
    }
  }

  set(x, y) {
    let board = this.state.board;
    board[x][y] = this.state.currentTurn;
    this.setState({board: board})
  }

  get(x, y) {
    return this.state.board[x][y];
  }

  setSquare(x, y) {
    let board = this.state.board;
    board[x][y] = this.state.currentTurn;
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