import React, { useContext, useState } from 'react';
import { GameContext } from '../../context/gameContext';
import './GameSetup.scss'
import GridSetup from './GridSetup';
const GameSetup = () => {
    const { rotateY } = useContext(GameContext);
    const [rotated, setRotated] = useState(rotateY);
    return (
        <div className='gameSetup'>
            <h1>{ }</h1>
            <h2>Place Your Ships</h2>
            <GridSetup></GridSetup>
        </div>
    )
}

export default GameSetup