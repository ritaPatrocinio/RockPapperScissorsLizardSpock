import React, {useState, useEffect} from "react";
import './Result.css';

export function Result({setNewGame, playersPick, housesPick, setScore, round, setRound}){
    const [playerWin, setPlayerWin] = useState('');

    const winner = (housesPick) =>  {
      if(playersPick.beats.includes(housesPick.id)){
            setPlayerWin('win')
             setScore((prev) => prev + 1 )
        } 
        else if (playersPick.id === housesPick.id) {
            setPlayerWin('Draw')
          }
         else {
            setPlayerWin('lose')
            setScore((prev) => prev > 0 ?  prev - 1 : prev )
              }
         }; 

    useEffect(() => {winner(housesPick); console.log('UE',playersPick, housesPick, round)}, [round])

    return (
            <div className="resDiv" >
            <h2 className="result">{playerWin==='Draw'? playerWin : 'You ' + playerWin}</h2>
            <button className="again" onClick={() => {setNewGame(true); setRound((prev) => prev +1)}}>Play again</button>
           </div> 
           )
}
