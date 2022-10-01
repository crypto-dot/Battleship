export const startGame = (username) => {
    return {
        type: 'GAME_START',
        payload: username
    }
}