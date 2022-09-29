import React, { useState } from 'react';
import './WaterCellSetup.scss';
const WaterCellSetup = ({ hover, index, onMouseEnter }) => {

    return (
        <div
            onMouseEnter={(e) => onMouseEnter(e, index)}
            className={hover ? 'waterCellSetup hoverWaterCellSetup' : hover === null ? 'waterCellSetup waterCellSetupError' : 'waterCellSetup'} ></div>
    )
}

export default WaterCellSetup