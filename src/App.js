import './App.css';
import { useContext } from 'react';
import GameStart from './components/GameStart';
import { GameContext } from './context/gameContext';
import GameSetup from './components/GameSetup';
function App() {
  const { username } = useContext(GameContext);
  return (
    <div className='app'>
      {console.log(username)}
      {username == '' ? <GameStart /> : <GameSetup />}
    </div>
  )
}

export default App;
