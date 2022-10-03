export const startGame = (username) => {
    return {
        type: 'GAME_START',
        payload: username
    }
}
export const setShipLocation = (posArr, shipIndex) => {
    return {
        type: 'SET_SHIP_LOCATION',
        payload: {
            shipIndex: shipIndex,
            posArr: posArr
        }
    }
}