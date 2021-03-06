import './App.css';
import {Score} from './Components/Score/Score';
import {IconList} from './Components/IconList/IconList';
import { Icon } from './Components/Icon/Icon';
import { Result } from './Components/Result/Result';
import {useState, useEffect, useMemo} from 'react';
import { PopUp } from './Components/PopUp/PopUp';

function App() {
  const [score, setScore] = useState(0);
  const [playersPick, setPlayersPick] = useState({});
  const [housesPick, setHousesPick] = useState({});
  const [newGame, setNewGame] = useState(true);
  const [round, setRound] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const data = useMemo(() => [{id: 'lizard', img: './images/icon-lizard.svg', beats: ['spock', 'paper']}, 
  {id: 'paper', img: './images/icon-paper.svg', beats: ['spock', 'rock']}, 
  {id: 'rock', img: './images/icon-rock.svg', beats: ['lizard', 'scissors']},
  {id: 'scissors', img: './images/icon-scissors.svg', beats: ['lizard', 'paper']},
  {id: 'spock', img: './images/icon-spock.svg', beats: ['scissors', 'rock']}], []);
        
  useEffect(() => {
    const random = Math.floor(Math.random()*5);
    setHousesPick(() => data[random]);
  }, [round]);

  const rules = () => {
    setShowRules(() => true)
  };

  return (
    <div className="App">
      <header className="App-header">
       <Score score={score}></Score>
      </header>
      {newGame ? <IconList newGame={newGame} setNewGame={setNewGame} setPlayersPick={setPlayersPick} icons={data}></IconList> 
      : <div className='flex'>
        <div className='block'>
        <h4>You picked</h4>
        <Icon newGame={newGame} setNewGame={setNewGame} icon={playersPick}></Icon>
        </div>
        <Result setRound={setRound} round={round} newGame={newGame} playersPick={playersPick} housesPick={housesPick} score={score} setScore={setScore} setNewGame={setNewGame}></Result>
        <div className='block'>
        <h4>The house picked</h4>
        <Icon newGame={newGame} setNewGame={setNewGame} icon={housesPick}></Icon>
        </div>
        </div>
      }
      {showRules ? <PopUp setShowRules={setShowRules}></PopUp> : ''}
      <button className='Rules' onClick={rules}>Rules</button>
    </div>
  );
}

export default App;
