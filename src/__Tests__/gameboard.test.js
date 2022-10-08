import Gameboard from "../factories/gameboard";
import Ship from "../factories/shipFactory";
describe("Testing Gameboard class", () => {
    let posArr1 = [{ pos: 1, hit: false }, { pos: 2, hit: false }, { pos: 3, hit: false }];
    const ship1 = new Ship(posArr1);
    let posArr2 = [{ pos: 55, hit: false }, { pos: 65, hit: false }];
    const ship2 = new Ship(posArr2);
    let posArr3 = [{ pos: 90, hit: false }, { pos: 91, hit: false }, { pos: 92, hit: false }];
    const ship3 = new Ship(posArr3);
    const gameBoard = new Gameboard([ship1, ship2, ship3]);
    test("Testing if Gameboard correctly records misses or hits on the gameboard", () => {
        expect(gameBoard.isHit(93)).toBe(false);
    });
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
describe("Testing empty gameboard class", () => {
    const ship = new Ship();
    const ship2 = new Ship();
    const ship3 = new Ship();

    const gameBoard = new Gameboard([ship, ship2, ship3]);

    test("Testing hit on empty gameboard", () => {
        expect(gameBoard.hit(9)).toBe(false);
    })
});