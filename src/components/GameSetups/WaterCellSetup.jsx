import React, { useState } from 'react';
import './WaterCellSetup.scss';
const WaterCellSetup = ({ hover, index, setHover, onMouseEnter }) => {

    return (
        <div
            onMouseEnter={(e) => setHover(onMouseEnter(e, index))}
            className={hover ? 'waterCellSetup hoverWaterCellSetup' : hover === null ? 'waterCellSetup waterCellSetupError' : 'waterCellSetup'} ></div>
    )
}

export default WaterCellSetup