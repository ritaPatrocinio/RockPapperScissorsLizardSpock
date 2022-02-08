import React, {useState, useEffect} from "react";
import './Score.css';
import logo from '../../images/logo-bonus.svg'


export function Score({score}){
    return(
        <div className="flex">
            <img alt="" src={logo}></img>
            <div>
                <p>Score</p>
                <p>{score}</p>
            </div>
        </div>
    )
}