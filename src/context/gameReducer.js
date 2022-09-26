export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'GAME_START':
            return {
                ...state,
                username: action.payload
            }
        default:
            return {
                ...state
            }
    }
}