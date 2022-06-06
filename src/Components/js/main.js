import "../css/main.scss";
import React from "react";
import Dice from "./dice";
import Confetti from "react-confetti";
// import useWindowSize from 'react-use/lib/useWindowSize'
import { nanoid } from "nanoid"; // to generate a random id
function Main() {
  let ArrayGenerator = () => {
    // generates a random array of 10 numbers
    let arr = [];
    for (let i = 0; i < 10; i++) {
      let num = Math.floor(6 * Math.random() + 1);
      arr.push({ value: num, isHeld: false, key: nanoid() });
    }
    return arr;
  };
  let [DicesValues, updateDicesValues] = React.useState(ArrayGenerator()); // a state to store the Dice values array
  let [Tenzies, updateTenzies] = React.useState(false);
  let buttonText = Tenzies === false ? "Roll" : "New Game";
  let holdDice = (id) => {
    // console.log(id);
    updateDicesValues((prevDicesValues) =>
      prevDicesValues.map((Dice) => ({
        ...Dice,
        isHeld: (Dice.key === id && !Tenzies) ? !Dice.isHeld : Dice.isHeld,
      }))
    );
  };
  let Dices = DicesValues.map(({ value, isHeld, key }) => {
    // mapping to the dice component
    return (
      <Dice
        value={value}
        key={key}
        id={key}
        isHeld={isHeld}
        holdDice={holdDice}
      />
    );
  });
  React.useEffect(() => {
    let checkValueChange = false,
      checkHeldState = true;
    for (let i = 0; i < 10; i++) {
      checkHeldState = checkHeldState & DicesValues[i].isHeld;
      if (DicesValues[i].value !== DicesValues[0].value)
        checkValueChange = true;
    }
    if (checkHeldState && (!checkValueChange)) {
      updateTenzies(true);
    }
    else if(Tenzies === true) updateTenzies(false);
  }, [DicesValues]);

  function Change() {
    if(Tenzies === true) updateDicesValues(ArrayGenerator());
    else
    updateDicesValues((prevDicesValues) =>
      prevDicesValues.map((prevDice) => {
        return prevDice.isHeld === true
          ? prevDice
          : { ...prevDice, value: Math.floor(6 * Math.random() + 1) };
      })
    );
  }
  return (
    <>
      <div className="main-container main-border">
      {Tenzies && <Confetti width="688" height="700" />}
        <div className="Header">
          <h1>Tenzies</h1>
          <p>
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className="dice-container">{Dices}</div>
        <div className="Button">
          <button type="button" className="btn" onClick={Change}>
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
