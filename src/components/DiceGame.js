import React from "react";
import DiceCup from "./DiceCup";
import Input from "./Input";
import { Link } from "react-router-dom";

class DiceGame extends React.Component {
  state = { players: [] };

  constructor(props) {
    super(props);
    this.playersWithSum = [];
    this.winner = { name: "", value: 0 };
  }

  onTermSubmit = name => {
    this.setState({
      players: [...this.state.players, { name: name, value: 0 }]
    });
  };

  diceSumToParent = state => {
    const player = this.state.players.find(p => p.name === state.name);
    const playerSum = {
      ...player,
      value: state.diceOneValue + state.diceTwoValue
    };
    if (playerSum.value > this.winner.value) {
      this.winner = playerSum;
    }
    this.props.whoWon(this.winner);
  };

  render() {
    const players = this.state.players.map(p => (
      <DiceCup key={p.name} player={p.name} sum={this.diceSumToParent} />
    ));
    return (
      <div className="ui container">
        <Input onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">{players}</div>
        <Link
          to="/winner"
          className="ui primary button"
          style={{ marginTop: "5%" }}
        >
          Who is the Winner?
        </Link>
      </div>
    );
  }
}
export default DiceGame;
