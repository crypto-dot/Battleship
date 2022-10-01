import React, { useState, useContext, useEffect, useRef } from 'react';
import WaterCellSetup from './WaterCellSetup';
import './GridSetup.scss';
import './WaterCellSetup.scss';
import { GameContext } from '../../context/gameContext';
import { useReducer } from 'react';
const GRID_COUNT = 100;
const GridSetup = () => {
    const [hover, setHover] = useState(Array(100).fill(false));
    const { shipLength, dispatch } = useContext(GameContext);
    const rotated = useRef(false);
    const [currentCursorIndex, setCurrentCursorIndex] = useState(0);
    const setRotatedSync = async (rotated) => {

    }
    useEffect(() => {
        const handleQPressed = (e) => {
            if (e.key === 'q') {
                setHover(handleHover(null, currentCursorIndex));
            }
        }
        window.addEventListener('keypress', handleQPressed);
        return () => {
            window.removeEventListener('keypress', handleQPressed);
        }
    }, [currentCursorIndex]);

    const handleHover = (e, index) => {
        let hoverStates = Array(100).fill(false);
        console.log(currentCursorIndex);
        setCurrentCursorIndex(index);
        if (e == null) {
            rotated.current = !rotated.current;
        }
        if (!rotated.current) {
            for (let i = index; i < index + shipLength[0] && i < 100; i++) {
                if ((index % 10) + shipLength[0] > 10) {
                    if (i === index) {
                        hoverStates[i] = null;
                    }
                    else {
                        hoverStates[i] = false;
                    }
                }
                else {
                    hoverStates[i] = true;
                }
            }
        } else {
            for (let i = index; i < index + (10 * shipLength[0]); i += 10) {
                if (index + (10 * shipLength[0]) >= 110) {
                    if (i === index) {
                        hoverStates[i] = null;
                    }
                    else {
                        hoverStates[i] = false;
                    }
                }
                else {
                    hoverStates[i] = true;
                }
            }
        }
        return hoverStates;
    }

    const generateWaterCells = () => {
        let arr = [];
        for (let i = 0; i < GRID_COUNT; i++) {
            arr.push(<WaterCellSetup setHover={setHover} key={`${i} ${hover[i]}`} index={i} onMouseEnter={handleHover} hover={hover[i]} ></WaterCellSetup>)
        }
        return arr;
    }
    const waterCells = generateWaterCells();

    return (
        <div className='gridSetup'>{waterCells}</div>
    )
}

export default GridSetup