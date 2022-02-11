import React, {useState, useEffect} from "react";
import './Score.css';
import logo from '../../images/logo-bonus.svg'


export function Score({score}){
    return(
        <div className="ScoreBorder">
            <img alt="" src={logo}></img>
            <div className="scoreDiv">
                <p className="scTitle">Score</p>
                <p className="score">{score}</p>
            </div>
        </div>
    )
}