export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'GAME_START':
            return {
                ...state,
                username: action.payload
            }
        case 'ROTATE_Y':
            console.log('asd');
            return {
                ...state,
                rotateY: action.payload
            }
        default:
            return {
                ...state
            }
    }
}