import { gameReducer } from "./gameReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    username: "",
    gameSetup: false,
    shipLength: [5, 4, 3, 2],
    rotateY: false
}

export const GameContext = createContext(INITIAL_STATE);

export const GameContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

    return (
        <GameContext.Provider
            value={
                {
                    username: state.username,
                    shipLength: state.shipLength,
                    rotateY: state.rotateY,
                    dispatch
                }
            }
        >
            {children}
        </GameContext.Provider>
    )
}