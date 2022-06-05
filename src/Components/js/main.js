import "../css/main.scss";
import React from "react";
import Dice from "./dice"
function Main() {
  let ArrayGenerator = () => { // generates a random array of 10 numbers
    let arr = [];
    for(let i = 0;i<10;i++)
      {
        let num = Math.floor(6*Math.random() + 1);
        arr.push(num);
      }
    return arr;
  }
  let [DicesValues,updateDicesValues] = React.useState(ArrayGenerator()); // a state to store the Dice values array
  let Dices = DicesValues.map((number) => { // mapping to the dice component
      return <Dice value = {number}/>
  });
  function Change()
    {
      updateDicesValues(() => ArrayGenerator());
    }
  return (
    <>
      <div className="main-container main-border">
        <div className = "dice-container">
         {Dices}
        </div>
        <div className="Button">
        <button type = "button" className="btn" onClick = {Change}>Roll</button>
        </div>
      </div>
    </>
  );
}

export default Main;
