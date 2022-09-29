import React, { useState, useContext, useEffect } from 'react';
import WaterCellSetup from './WaterCellSetup';
import './GridSetup.scss';
import './WaterCellSetup.scss';
import { rotateShip } from '../../context/gameAction';
import { GameContext } from '../../context/gameContext';
import { useReducer } from 'react';
const GRID_COUNT = 100;
const GridSetup = () => {
    const [hover, setHover] = useState(Array(100).fill(false));
    const { shipLength, rotateY, dispatch } = useContext(GameContext);
    useEffect(() => {
        const handleQPressed = (e) => {
            console.log(e.key);
            if (e.key === 'q') {
                dispatch(rotateShip());
            }
        }
        window.addEventListener('keypress', handleQPressed);
    }, []);

    const handleHover = (e, index) => {
        let hoverStates = Array(100).fill(false);
        console.log('first');
        if (!rotateY) {
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
            console.log('asd');
            for (let i = index; i < index + (10 * shipLength[0]); i += 10) {
                if (index + (10 * shipLength[0]) > 100) {
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
        setHover(hoverStates);
    }

    const generateWaterCells = () => {
        let arr = [];
        for (let i = 0; i < GRID_COUNT; i++) {
            arr.push(<WaterCellSetup index={i} onMouseEnter={handleHover} hover={hover[i]} ></WaterCellSetup>)
        }
        return arr;
    }


    return (
        <div className='gridSetup'>{generateWaterCells()}</div>
    )
}

export default GridSetup