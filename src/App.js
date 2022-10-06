import './App.css';
import { useContext } from 'react';
import GameStart from './components/GameStart';
import { GameContext } from './context/gameContext';
import GameSetup from './components/GameSetups/GameSetup';
function App() {
  const { username, gameSetup } = useContext(GameContext);
  return (
    <div className='app'>
      {username === '' ? <GameStart /> : !gameSetup ? <GameSetup /> : <div>hello</div>}
    </div>
  )
}

export default App;
