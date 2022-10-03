export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'GAME_START':
            return {
                ...state,
                username: action.payload
            }
        case 'SET_SHIP_LOCATION':
            return {
                ...state,
                ships: [state.ships[action.payload.shipIndex].setPosArr(action.payload.posArr), ...state.ships.filter((ship, index) => index !== action.payload.shipIndex)]
            }
        default:
            return {
                ...state
            }
    }
}