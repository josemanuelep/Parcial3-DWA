import React from 'react';
import Navigation from './components/Navigation';
import PlayersDeck from './components/PlayersDeck';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navigation: [],
      players: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.getPlayers = this.getPlayers.bind(this);

  }
  componentDidMount() {
    this.getOptions();
    this.getPlayers();

  }

  getPlayers() {

    fetch('https://dwaapi.juvasquez88.now.sh/atp')
      .then(res => res.json())
      .then(data => {
        this.setState({ players: data.atp.players });
        console.log(this.state);
      });
  }

  getOptions() {

    fetch('https://dwaapi.juvasquez88.now.sh/atp')
      .then(res => res.json())
      .then(data => {
        this.setState({ navigation: data.atp.options });
      });

  }


  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <Navigation navigation={this.state.navigation} ></Navigation>
        <PlayersDeck players={this.state.players}></PlayersDeck>
      </div>
    );
  }
}

export default App;
