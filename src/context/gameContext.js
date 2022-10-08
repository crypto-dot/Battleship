import { gameReducer } from "./gameReducer";
import { createContext, useReducer } from "react";
import Ship from "../factories/shipFactory";
import Gameboard from "../factories/gameboard";
const battleship = new Ship([], 'BattleShip', 4);
const carrier = new Ship([], 'Carrier', 5);
const cruiser = new Ship([], 'Cruiser', 3);
const submarine = new Ship([], 'Submarine', 3);
const destroyer = new Ship([], 'Destroyer', 2);
const ships = [battleship, carrier, cruiser, submarine, destroyer];
const playerGameBoard = new Gameboard();
const INITIAL_STATE = {
    username: "",
    gameSetup: false,
    ships: [carrier, battleship, cruiser, submarine, destroyer],
    playerGam
}

export const GameContext = createContext(INITIAL_STATE);

export const GameContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

    return (
        <GameContext.Provider
            value={
                {
                    username: state.username,
                    ships: state.ships,
                    gameSetup: state.gameSetup,
                    dispatch
                }
            }
        >
            {children}
        </GameContext.Provider>
    )
}