import './App.css';
import {Score} from './Components/Score/Score';
import {IconList} from './Components/IconList/IconList';
import { Icon } from './Components/Icon/Icon';
import { Result } from './Components/Result/Result';
import {useState, useEffect, useMemo} from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [playersPick, setPlayersPick] = useState({});
  const [housesPick, setHousesPick] = useState({});
  const [newGame, setNewGame] = useState(true);
  const [round, setRound] = useState(0);

  const data = useMemo(() => [{id: 'lizard', img: './images/icon-lizard.svg', beats: ['spock', 'paper']}, 
  {id: 'paper', img: './images/icon-paper.svg', beats: ['spock', 'rock']}, 
  {id: 'rock', img: './images/icon-rock.svg', beats: ['lizard', 'scissors']},
  {id: 'scissors', img: './images/icon-scissors.svg', beats: ['lizard', 'paper']},
  {id: 'spock', img: './images/icon-spock.svg', beats: ['scissors', 'rock']}], []);
        
  useEffect(() => {
    const random = Math.floor(Math.random()*5);
    setHousesPick(() => data[random]);
  }, [round]);

  return (
    <div className="App">
      <header className="App-header">
       <Score score={score}></Score>
      </header>
      {newGame ? <IconList newGame={newGame} setNewGame={setNewGame} setPlayersPick={setPlayersPick} icons={data}></IconList> 
      : <div className='flex'>
        <Icon newGame={newGame} setNewGame={setNewGame} icon={playersPick}></Icon>
        <Result setRound={setRound} round={round} newGame={newGame} playersPick={playersPick} housesPick={housesPick} score={score} setScore={setScore} setNewGame={setNewGame}></Result>
        <Icon newGame={newGame} setNewGame={setNewGame} icon={housesPick}></Icon>
        </div>
      }
      
    </div>
  );
}

export default App;
