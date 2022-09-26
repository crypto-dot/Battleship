export const startGame = (username) => {
    return {
        type: 'GAME_START',
        payload: username
    }
}
export const rotateShip = (bool) => {
    return {
        type: 'ROTATE_Y',
        payload: bool
    }
}