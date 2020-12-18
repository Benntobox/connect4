class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTurn: 1
    }
  }

  play(x, y) {
    $.ajax({
      url: '/play',
      method: 'POST',
      data: {x, y},
      success: () => 'Successful post!'
    })
  }

  render() {
    return (
      <div>TESTING FURTHER STUFF AGAIN</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));