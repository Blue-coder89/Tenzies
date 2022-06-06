import React from "react"
import "../css/dice.scss"

function Dice(props) {
    let Style = {backgroundColor:props.isHeld?"#59E391":"#F5F5F5"};
    return (
    <>
    <div className = "grid-container ">
        <div className="dice dice-border" style = {Style} onClick = {() => {
            props.holdDice(props.id);
        }}>
            <h2>{props.value}</h2>
            </div>
        </div>
    </>
    );
}

export default Dice;