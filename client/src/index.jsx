import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTurn: 1,
      length: 6,
      width: 7
    }
  }

  play(x) {
    console.log('Play ', x)
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