import React, { useState, useContext, useEffect } from 'react';
import { GameContext } from '../context/gameContext';
import { v4 } from 'uuid';
import './GameSetup.scss';
import { rotateShip } from '../context/gameAction';

const GRID_COUNT = 100;

const GameSetup = () => {
    const [hover, setHover] = useState(Array(GRID_COUNT).fill(false));
    const { shipLength, rotateY, dispatch } = useContext(GameContext);
    const [rotated, setRotated] = useState(false);
    useEffect(() => {
        const handleQPressed = (e) => {
            console.log(e.key);
            if (e.key === 'q') {
                dispatch(rotateShip(rotated));
            }
            setRotated(!rotated);
        }
        window.addEventListener('keypress', handleQPressed);
        return () => {
            window.removeEventListener('keypress', handleQPressed);
        }
    }, [rotated]);

    const handleErrorCell = () => {
        document.querySelector('.grid').classList.add('gridError');
        return 'gridCell errorCell';
    }
    const handleMouseLeave = () => {
        document.querySelector('.grid').classList.remove('gridError');
        return 'gridCell hoverCell';
    }
    const generateGridCells = () => {
        let arr = [];
        for (let i = 0; i < GRID_COUNT; i++) {
            arr.push(<div key={i} onMouseEnter={(e) => HandleCellEnter(e, i)} className={hover[i] ? handleMouseLeave() : hover[i] == null ? handleErrorCell() : 'gridCell'}></div>);
        }
        return arr;
    }

    const HandleCellEnter = (e, index) => {
        let hoverStates = [...hover];
        console.log('first');
        console.log(rotateY);
        if (!rotateY) {
            for (let i = 0; i < GRID_COUNT; i++) {
                if (i >= index && i < index + shipLength[0] && (index % 10) + shipLength[0] <= 10) {
                    hoverStates[i] = true;
                } else if (i === index) {
                    hoverStates[i] = null;
                } else {
                    hoverStates[i] = false;
                }
            }
        } else {
            console.log('second');
            for (let i = 0; i < GRID_COUNT; i++) {
                if (i % 10 === index % 10 && i < index + shipLength[0]) {
                    debugger;
                    hoverStates[i] = true;
                } else if (i === index) {
                    hoverStates[i] = null;
                } else {
                    hoverStates[i] = false;
                }
            }
        }
        setHover(hoverStates);
    }
    return (
        <div className='gameSetup'>
            <h2>Place Your Ships</h2>
            <div onMouseLeave={handleMouseLeave} className='grid'><span className='gridInstruction'>Q - Rotate</span>{generateGridCells()}</div>
        </div>
    )
}

export default GameSetup