import Gameboard from "./src/gameboard";
import Ship from "./src/shipFactory";
import Player from "./src/Player";
describe(
    "Testing Ship class", () => {
        let posArr = [{ pos: 1, hit: false }, { pos: 2, hit: false }, { pos: 3, hit: false }];
        const ship1 = new Ship(posArr);

        test("Testing hit function on Ship object when ship is hit", () => {
            expect(ship1.hit(2)).toBe(true);
        });
        test("Testing hit function on Ship object when ship is not hit", () => {
            expect(ship1.hit(4)).toBe(false);
        });
        test("Testing if ship correctly stays afloat", () => {
            ship1.hit(1);
            expect(ship1.getIsSunk()).toBe(false);
        });
        test("Testing if ship correctly sinks", () => {
            ship1.hit(3);
            expect(ship1.getIsSunk()).toBe(true);
        });
    }
);

describe("Testing Gameboard class", () => {
    let posArr1 = [{ pos: 1, hit: false }, { pos: 2, hit: false }, { pos: 3, hit: false }];
    const ship1 = new Ship(posArr1);
    let posArr2 = [{ pos: 55, hit: false }, { pos: 65, hit: false }];
    const ship2 = new Ship(posArr2);
    let posArr3 = [{ pos: 90, hit: false }, { pos: 91, hit: false }, { pos: 92, hit: false }];
    const ship3 = new Ship(posArr3);
    const gameBoard = new Gameboard([ship1, ship2, ship3]);
    test("Testing if Gameboard correctly hits ship", () => {
        expect(gameBoard.hit(91)).toBe(true);
    });
    test("Testing if Gameboard correctly misses", () => {
        expect(gameBoard.hit(93)).toBe(false);
    });
    test("Testing if Gameboard correctly records misses or hits on the gameboard", () => {
        expect(gameBoard.isHit(93)).toBe(true);
    });
    test("Testing if Gameboard correctly records all ships sunken", () => {
        gameBoard.hit(90);
        gameBoard.hit(92);
        gameBoard.hit(55);
        gameBoard.hit(65);
        gameBoard.hit(1);
        gameBoard.hit(2);
        gameBoard.hit(3);
        expect(gameBoard.allShipsSunk()).toBe(true);
    });
});
describe("testing Player class", () => {
    let posArr1 = [{ pos: 1, hit: false }, { pos: 2, hit: false }, { pos: 3, hit: false }];
    const ship1 = new Ship(posArr1);
    let posArr2 = [{ pos: 55, hit: false }, { pos: 65, hit: false }];
    const ship2 = new Ship(posArr2);
    let posArr3 = [{ pos: 90, hit: false }, { pos: 91, hit: false }, { pos: 92, hit: false }];
    const ship3 = new Ship(posArr3);
    const gameBoard = new Gameboard([ship1, ship2, ship3]);

    let posArr4 = [{ pos: 4, hit: false }, { pos: 5, hit: false }, { pos: 6, hit: false }];
    const ship4 = new Ship(posArr4);
    let posArr5 = [{ pos: 66, hit: false }, { pos: 67, hit: false }];
    const ship5 = new Ship(posArr5);
    let posArr6 = [{ pos: 89, hit: false }, { pos: 90, hit: false }, { pos: 91, hit: false }];
    const ship6 = new Ship(posArr6);
    const gameBoard2 = new Gameboard([ship4, ship5, ship6]);

    const player1 = new Player(gameBoard2);
    const player2 = new Player(gameBoard);


});