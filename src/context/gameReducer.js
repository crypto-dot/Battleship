export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'GAME_START':
            console.log(action.payload);
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