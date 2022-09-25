import React, { useState, useContext } from 'react'
import './GameStart.scss';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { startGame } from '../context/gameAction';
import { GameContext } from '../context/gameContext';
function GameStart() {
    const [name, setName] = useState("");
    const { dispatch } = useContext(GameContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startGame(name));
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div className='gameStart'>
            <header className='gameStartHeader'><h1 className='gameStartTitle'>BATTLESHIP</h1></header>
            <div className='gameStartBottom'>
                <form>
                    <label htmlFor='name'>Enter Name: </label>
                    <input onChange={handleChange} id='name' type='text' className='gameStartInput' />
                    <button onClick={handleSubmit}>
                        <DoubleArrowIcon className='arrowIcon' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default GameStart