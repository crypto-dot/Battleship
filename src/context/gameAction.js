export const startGame = (username) => {
    return {
        type: 'GAME_START',
        payload: username
    }
}
export const rotateShip = () => {
    return {
        type: 'ROTATE_Y'
    }
}