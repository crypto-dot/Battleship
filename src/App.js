import './App.css';
import { useContext } from 'react';
import GameStart from './components/GameStart';
import { GameContext } from './context/gameContext';
function App() {
  const { username } = useContext(GameContext);
  setInterval(() => {
    console.log(username);
  }, 3000);
  return (
    <div className='app'>
      {console.log(username)}
      {username == '' ? <GameStart /> : <div>{username}</div>}
    </div>
  )
}

export default App;
