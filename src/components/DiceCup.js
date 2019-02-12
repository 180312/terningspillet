import React from "react";
import Dice from "./Dice";
import Dice_1 from "./pics/Dice_1.png";
import Dice_2 from "./pics/Dice_2.png";
import Dice_3 from "./pics/Dice_3.png";
import Dice_4 from "./pics/Dice_4.png";
import Dice_5 from "./pics/Dice_5.png";
import Dice_6 from "./pics/Dice_6.png";

class DiceCup extends React.Component {
  state = {
    diceOneValue: 0,
    diceOneImg: Dice_1,
    diceTwoValue: 0,
    diceTwoImg: Dice_1
  };

  rollDice = () => {
    const diceOneValue = Math.floor(6.0 * Math.random()) + 1;
    const diceOneImg = this.getPicture(diceOneValue);
    const diceTwoValue = Math.floor(6.0 * Math.random()) + 1;
    const diceTwoImg = this.getPicture(diceTwoValue);
    this.setState({
      diceOneValue: diceOneValue,
      diceOneImg: diceOneImg,
      diceTwoValue: diceTwoValue,
      diceTwoImg: diceTwoImg
    });
  };

  getPicture = value => {
    switch (value) {
      case 1:
        return Dice_1;
      case 2:
        return Dice_2;
      case 3:
        return Dice_3;
      case 4:
        return Dice_4;
      case 5:
        return Dice_5;
      case 6:
        return Dice_6;
      default:
        return;
    }
  };
  render() {
    return (
      <div>
        <h1>{this.props.player}</h1>
        <Dice img={this.state.diceOneImg} />
        <Dice img={this.state.diceTwoImg} />
        <button onClick={this.rollDice}>Roll the dices!</button>
        <h1>Sum: {this.state.diceOneValue + this.state.diceTwoValue}</h1>
      </div>
    );
  }
}
export default DiceCup;
