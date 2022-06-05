import React from "react"
import "../css/dice.scss"

function Dice(props) {
    return (
    <>
    <div className = "grid-container ">
        <div className="dice dice-border">
            <h2>{props.value}</h2>
            </div>
        </div>
    </>
    );
}

export default Dice;