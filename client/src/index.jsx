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
    for (let x = 0; x < 7; x++) {
      let row = [];
      for (let y = 0; y < 6; y++) {
        row[y] = 0;
      }
      board[x] = row;
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
    return this.fourInARow(this.state.board[x]) || 
      this.fourInARow(this.state.board.map(row => row[y])) ||
      this.fourInARow(this.checkMajorDiag(x, y)) || 
      this.fourInARow(this.checkMinorDiag(x, y));
  }

  checkMajorDiag(x, y) {
    let arr = [];
    while (x > 0 && y > 0) {
      x--;
      y--;
    }
    while (x < 7 && y < 6) {
      arr.push(this.get(x, y));
      x++;
      y++;
    }
    return arr;
  }

  checkMinorDiag(x, y) {
    let arr = [];
    while (x > 0 && y < 5) {
      x--;
      y++;
    }
    while (x < 7 && y > 0) {
      console.log('minor diag ', x, ', ', y)
      arr.push(this.get(x, y));
      x++;
      y--;
    }
    return arr;
  }

  fourInARow(arr) {
    let longest, current = 0;
    for (let val of arr) {
      current === val ? longest++ : longest = 1;
      if (longest === 4 && current !== 0) { console.log('arr is', arr); return true; }
      current = val;
    }
    return false;
  }

  gameEnd() {
    this.setState({active: false})
    $.ajax({
      url: '/gameover',
      method: 'POST',
      data: {player: this.state.currentTurn},
      success: (data) => console.log(data)
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