import React, {useState, useEffect} from "react";
import './IconList.css';
import {Icon} from '../Icon/Icon';


export function IconList({icons, setPlayersPick, setNewGame, newGame}){
    return (
        <div className="circle-container">
            {icons.map(icon => <Icon newGame={newGame} setNewGame={setNewGame} setPlayersPick={setPlayersPick} key={icon.id} icon={icon}></Icon> )}
           </div> 
           )
}