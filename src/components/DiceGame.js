import React from "react";
import DiceCup from "./DiceCup";
import Input from "./Input";

class DiceGame extends React.Component {
  state = { players: [], winner: null };

  onTermSubmit = name => {
    this.setState({
      players: [...this.state.players, { name: name, value: 0 }]
    });
  };

  render() {
    const players = this.state.players.map(p => (
      <DiceCup key={p.name} player={p.name} />
    ));
    return (
      <div className="ui container">
        <Input onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">{players}</div>
      </div>
    );
  }
}
export default DiceGame;
