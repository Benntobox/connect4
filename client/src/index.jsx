import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTurn: 1
    }
  }

  play(x, y) {
    console.log('Play')
  }

  render() {
    return (
      <div>
      <div>TESTING FURTHER STUFF AGAIN</div>
      <button >PRESS ME</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));