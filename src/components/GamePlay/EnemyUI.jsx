import './EnemyUI.scss';
import { useContext } from 'react';
import { GameContext } from '../../context/gameContext';
const EnemyUI = () => {
    const { username } = useContext(GameContext);
    return (
        <div className='enemyUI'>
            <h1>
                {username}'s board
            </h1>
        </div>
    )
}

export default EnemyUI;