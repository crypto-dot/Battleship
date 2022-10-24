import React, { useState } from 'react';
import './WaterCellSetup.scss';
const WaterCellSetup = ({ hover, clicked, onMouseLeave, index, setClicked, onClick, setHover, onMouseEnter }) => {

    return (
        <div
            onClick={(e) => setClicked(onClick(e, index))}
            onMouseLeave={(e) => setHover(onMouseLeave)}
            onMouseEnter={(e) => setHover(onMouseEnter(e, index))}
            className={hover ? 'waterCellSetup hoverWaterCellSetup' : hover === null ? 'waterCellSetup waterCellSetupError' : hover === undefined ? 'waterCellSetup waterCellHoverSpacer' : clicked ? 'waterCellSetup waterCellSetupClicked' : clicked === null ? 'waterCellSetup waterCellHoverSpacer' : 'waterCellSetup'} ></div>
    )
}

export default WaterCellSetup