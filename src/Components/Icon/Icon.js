import React, {useState, useEffect} from "react";
import './Icon.css';


export function Icon({icon, setPlayersPick, setNewGame, newGame}){
    const selectPick = () => {
        setPlayersPick(() => icon);
        setNewGame(() => false);
    } 

    return (
            <div onClick={() => newGame ? selectPick() : ''} style={{borderColor: icon.id==='lizard' ? '#03a9f4' : icon.id==='paper' ?
             '#3f51b5' : icon.id==='rock' ? '#9c27b0' : icon.id==='spock' ? '#673ab7' : icon.id==='scissors' ? 'rgb(213 0 0)' : ''}} className="iconBorder">
            <img alt={icon.id} src={require('../../' + icon.img.replace('./', ''))}></img>
           </div> 
           )
}
