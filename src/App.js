import './App.css';
import { useContext } from 'react';
import GameStart from './components/GameStart';
import { GameContext } from './context/gameContext';
import GameSetup from './components/GameSetups/GameSetup';
import GamePlay from './components/GamePlay/GamePlay';
function App() {
  const { username, gameSetup } = useContext(GameContext);
  return (
    <div className='app'>
      {username === '' ? <GameStart /> : !gameSetup ? <GameSetup /> : <GamePlay />}
    </div>
  )
}

export default App;
