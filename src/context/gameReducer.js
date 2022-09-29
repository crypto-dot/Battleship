export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'GAME_START':
            return {
                ...state,
                username: action.payload
            }
        case 'ROTATE_Y':
            return {
                ...state,
                rotateY: !(state.rotateY)
            }
        default:
            return {
                ...state
            }
    }
}