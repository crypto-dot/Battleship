import React from 'react'
import './GameStart.scss';
import { useState } from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
function GameStart() {
    const [username, setUsername] = useState('');

    return (
        <div className='gameStart'>
            <header className='gameStartHeader'><h1 className='gameStartTitle'>BATTLESHIP</h1></header>
            <div className='gameStartBottom'>
                <form>
                    <label htmlFor='name'>Enter Name: </label>
                    <input onChange={(e) => setUsername(e.target.value)} id='name' type='text' className='gameStartInput' />
                    <DoubleArrowIcon className='arrowIcon' />
                </form>
            </div>
        </div>
    )
}

export default GameStart