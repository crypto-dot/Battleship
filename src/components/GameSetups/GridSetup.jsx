import React, { useState, useContext, useEffect, useRef } from 'react';
import WaterCellSetup from './WaterCellSetup';
import './GridSetup.scss';
import './WaterCellSetup.scss';
import { gameSetupFinished, setShipLocation } from '../../context/gameAction';
import { GameContext } from '../../context/gameContext';
const GRID_COUNT = 100;
const GridSetup = () => {
    const [hover, setHover] = useState(Array(100).fill(false));
    const [clicked, setClicked] = useState(Array(100).fill(false));
    const { ships, dispatch } = useContext(GameContext);
    const rotated = useRef(false);
    const [currentCursorIndex, setCurrentCursorIndex] = useState(0);
    const shipIndex = useRef(0);
    const handleMouseLeave = () => {
        return Array(100).fill(false);
    }
    const handleClick = (e, index) => {

        if (e.target.classList.contains('waterCellSetupError')) {
            return [...clicked];
        }
        const clickedStates = [...clicked];
        const posArr = [];
        if (!rotated.current) {
            for (let i = index; i < index + ships[shipIndex.current].getLength(); i++) {
                clickedStates[i] = true;
                posArr.push(i);
            }
        } else {
            for (let i = index; i < index + (10 * ships[shipIndex.current].getLength()); i += 10) {
                clickedStates[i] = true;
                posArr.push(i);
            }
        }
        dispatch(setShipLocation(posArr, shipIndex.current));
        shipIndex.current = shipIndex.current + 1;

        return clickedStates;
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
        setCurrentCursorIndex(index);
        if (e == null) {
            rotated.current = !rotated.current;
        }
        if (shipIndex.current === 5) {
            dispatch(gameSetupFinished());
        }

        if (!rotated.current) {
            for (let i = index; i < index + ships[shipIndex.current].getLength() && i < 100; i++) {
                if ((index % 10) + ships[shipIndex.current].getLength() > 10) {
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
            for (let i = index; i < index + (10 * ships[shipIndex.current].getLength()); i += 10) {
                if (index + (10 * ships[shipIndex.current].getLength()) >= 110) {
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
        for (let i = 0; i < GRID_COUNT; i++) {
            if (hoverStates[i] == clicked[i] && clicked[i] === true) {
                hoverStates = Array(100).fill(false);
                hoverStates[index] = null;
                break;
            }
        }
        return hoverStates;
    }

    const generateWaterCells = () => {
        let arr = [];
        for (let i = 0; i < GRID_COUNT; i++) {
            arr.push(<WaterCellSetup
                setClicked={setClicked}
                onClick={handleClick}
                onMouseLeave={handleMouseLeave}
                setHover={setHover}
                clicked={clicked[i]}
                key={`${i} ${hover[i]}`}
                index={i}
                onMouseEnter={handleHover}
                hover={hover[i]} >

            </WaterCellSetup>)
        }
        return arr;
    }
    const waterCells = generateWaterCells();

    return (
        <div className='gridSetup'>{waterCells}</div>
    )
}

export default GridSetup