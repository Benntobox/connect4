import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Board from './components/Board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTurn: 1,
      board: this.init(),
      active: true
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
    if (!this.state.active) { console.log('GAME IS OVER!'); return; }
    let y = 0; 
    while (y < 6) {
      console.log('Play ', this.get(x, y))
      if (this.get(x, y) === 0 && this.get(x, y+1) > 0 || y === 5) {
        console.log('SETTING ', x, ',', y)
        this.set(x, y);
        this.checkWin(x, y) ? this.gameEnd() : this.next();
        return;
      }
      y++;
    }
  }

  checkWin(x, y) {
    return this.checkRow(x) || this.checkCol(y) || this.checkDiagonals(x, y);
  }

  checkRow(x) {
    return this.state.board[x].reduce((result, val) => result = result || val === 2, false);
  }

  checkCol(y) {
    return false;
  }

  checkDiagonals(x, y) {
    return false;
  }

  gameEnd() {
    this.setState({active: false})
    $.ajax({
      url: '/gameover',
      method: 'POST',
      data: {player: this.state.currentTurn},
      success: () => console.log('GAME OVER')
    })
  }

  set(x, y) {
    let board = this.state.board;
    board[x][y] = this.state.currentTurn;
    this.setState({board: board})
  }

  get(x, y) {
    return this.state.board[x][y];
  }

  next() {
    this.setState({currentTurn: this.state.currentTurn === 1 ? 2 : 1})
  }

  render() {
    return (
      <div>
        <Board board={this.state.board} play={this.play.bind(this)}/>
        {[...Array(7).keys()].map(x => (<button className="play" onClick={this.play.bind(this, x)}>{x}</button>))}
        {(this.state.active ? <div></div> : <div>GAME IS OVER BRAH</div>)}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));