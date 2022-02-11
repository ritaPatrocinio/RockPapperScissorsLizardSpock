import React from "react";
import './PopUp.css';
import rules from '../../images/image-rules-bonus.svg'


export function PopUp({setShowRules}) {

    return (
        <div className="modal">
            <div className="modal_content">
                <div className="flexP">
                <p className="rules">Rules</p>
                <button className="SendBut Cancel NO" onClick={() => setShowRules(false)}>x</button>
                </div>
                <img alt="rules" src={rules}></img>
            </div>
        </div>
    )
}
