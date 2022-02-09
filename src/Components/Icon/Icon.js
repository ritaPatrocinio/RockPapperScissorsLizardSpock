import React, {useState, useEffect} from "react";
import './Icon.css';


export function Icon({icon, setPlayersPick, setNewGame, newGame}){
    const selectPick = () => {
        setPlayersPick(() => icon);
        setNewGame(() => false);
    } 

    return (
            <div onClick={() => newGame ? selectPick() : ''} className="iconBorder">
            <img alt={icon.id} src={require('../../' + icon.img.replace('./', ''))}></img>
           </div> 
           )
}
