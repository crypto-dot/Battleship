import { gameReducer } from "./gameReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    username: ""
}

export const GameContext = createContext(INITIAL_STATE);

export const GameContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

    return (
        <GameContext.Provider
            value={
                {
                    username: state.username,
                    dispatch
                }
            }
        >
            {children}
        </GameContext.Provider>
    )
}