import React from 'react';
import './GameSetup.scss'
import GridSetup from './GridSetup';
const GameSetup = () => {
    return (
        <div className='gameSetup'>
            <h2>Place Your Ships</h2>
            <GridSetup></GridSetup>
        </div>
    )
}

export default GameSetup