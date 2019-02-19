import React from "react";
import DiceGame from "./DiceGame";
import { HashRouter, Route } from "react-router-dom";
import ModalView from "./ModalView";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.winner = {};
  }

  whoWon = won => {
    this.winner = won;
  };

  render() {
    return (
      <HashRouter>
        <>
          <Route
            path="/"
            exact
            component={() => <DiceGame whoWon={this.whoWon} />}
          />
          <Route
            path="/winner"
            exact
            component={() => <ModalView winner={this.winner} />}
          />
        </>
      </HashRouter>
    );
  }
}

export default App;
