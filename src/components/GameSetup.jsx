import React, { useState, useContext } from 'react';
import { GameContext } from '../context/gameContext';
import { v4 } from 'uuid';
import './GameSetup.scss';

const GRID_COUNT = 100;

const GameSetup = () => {
    const [hover, setHover] = useState(Array(GRID_COUNT).fill(false));
    const { shipLength, rotateY } = useContext(GameContext);
    const generateGridCells = () => {
        let arr = [];
        for (let i = 0; i < GRID_COUNT; i++) {
            arr.push(<div key={v4()} onMouseOver={(e) => HandleCellHover(e, i)} className={hover[i] ? 'gridCell hoverCell' : 'gridCell'}></div>);
        }
        return arr;
    }

    const HandleCellHover = (e, index) => {
        let hoverStates = [...hover];
        if (!rotateY) {
            for (let i = 0; i < GRID_COUNT; i++) {
                if (i >= index && i < index + shipLength[0] && (index % 10) + shipLength[0] <= 10) {
                    hoverStates[i] = true;
                } else {
                    hoverStates[i] = false;
                }
            }
        } else {
            for (let i = 0; i < GRID_COUNT; i++) {
                console.log(index % 10)
                if (i >= index + 10 && i < index + shipLength[0] && (index % 10) + shipLength[0] < 10) {
                    hoverStates[i] = true;
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
            <div className='grid'><span className='gridInstruction'>Q - Rotate</span>{generateGridCells()}</div>
        </div>
    )
}

export default GameSetup