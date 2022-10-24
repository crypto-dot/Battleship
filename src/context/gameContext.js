import { gameReducer } from "./gameReducer";
import { createContext, useReducer } from "react";
import { getRandomPosArr } from "../Shuffle";
import Ship from "../factories/shipFactory";
import Gameboard from "../factories/gameboard";
import Player from "../factories/Player";

const playerBattleship = new Ship([], 'BattleShip', 4);
const playerCarrier = new Ship([], 'Carrier', 5);
const playerCruiser = new Ship([], 'Cruiser', 3);
const playerSubmarine = new Ship([], 'Submarine', 3);
const playerDestroyer = new Ship([], 'Destroyer', 2);

const computerBattleship = new Ship(getRandomPosArr(4), 'BattleShip', 4);
const computerCarrier = new Ship(getRandomPosArr(5), 'Carrier', 5);
const computerCruiser = new Ship(getRandomPosArr(3), 'Cruiser', 3);
const computerSubmarine = new Ship(getRandomPosArr(3), 'Submarine', 3);
const computerDestroyer = new Ship(getRandomPosArr(2), 'Destroyer', 2);

const playerShips = [playerBattleship, playerCarrier, playerCruiser, playerSubmarine, playerDestroyer];
const computerShips = [computerBattleship, computerCarrier, computerCruiser, computerSubmarine, computerDestroyer];


const computerGameBoard = new Gameboard(computerShips);
const playerGameBoard = new Gameboard(playerShips);
const player = new Player(computerGameBoard);
const computer = new Player(playerGameBoard);
const INITIAL_STATE = {
    username: "",
    gameSetup: false,
    ships: playerShips,
    player: player,
    computer: computer
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
                    player: state.player,
                    computer: state.computer,
                    dispatch
                }
            }
        >
            {children}
        </GameContext.Provider>
    )
}