import './App.css';
import {Score} from './Components/Score/Score';
import {IconList} from './Components/IconList/IconList';
import { Icon } from './Components/Icon/Icon';
import {useState, useEffect, useMemo} from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [playersPick, setPlayersPick] = useState(null);
  const [housesPick, setHousesPick] = useState({});
  const [newGame, setNewGame] = useState(true);

  const data = useMemo(() => [{id: 'lizard', img: './images/icon-lizard.svg', beats: ['spock', 'paper']}, 
  {id: 'paper', img: './images/icon-paper.svg', beats: ['spock', 'rock']}, 
  {id: 'rock', img: './images/icon-rock.svg', beats: ['lizard', 'scissors']},
  {id: 'scissors', img: './images/icon-scissors.svg', beats: ['lizard', 'paper']},
  {id: 'spock', img: './images/icon-spock.svg', beats: ['scissors', 'rock']}], []);

  useEffect(() => {
    const random = Math.floor(Math.random()*5);
    setHousesPick(() => data[random]);
  }, [newGame, data]);

  return (
    <div className="App">
      <header className="App-header">
       <Score score={score}></Score>
      </header>
      {newGame ? <IconList newGame={newGame} setNewGame={setNewGame} setPlayersPick={setPlayersPick} icons={data}></IconList> 
      : <div>
        <Icon newGame={newGame} setNewGame={setNewGame} setPlayersPick={setPlayersPick} icon={playersPick}></Icon>
        <Icon newGame={newGame} setNewGame={setNewGame} setPlayersPick={setPlayersPick} icon={housesPick}></Icon>
        </div>
      }
      
    </div>
  );
}

export default App;
