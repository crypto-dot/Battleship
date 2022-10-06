import React from 'react';
import './GameSetup.scss'
import GridSetup from './GridSetup';
const GameSetup = () => {
    return (
        <div className='gameSetup'>
            <h2>Place Your Ships</h2>\
            <main className='mainContent'>
                <h2 className='mainContentTitle'>Q to Rotate</h2>
                <GridSetup></GridSetup>
            </main>
        </div>
    )
}

export default GameSetup