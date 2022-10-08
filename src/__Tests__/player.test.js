import Player from "../factories/Player";
import Ship from '../factories/shipFactory';
import Gameboard from '../factories/gameboard';
describe("Testing Player class", () => {
    let posArr1 = [{ pos: 1, hit: false }, { pos: 2, hit: false }, { pos: 3, hit: false }];
    const ship1 = new Ship(posArr1);
    let posArr2 = [{ pos: 55, hit: false }, { pos: 65, hit: false }];
    const ship2 = new Ship(posArr2);
    let posArr3 = [{ pos: 90, hit: false }, { pos: 91, hit: false }, { pos: 92, hit: false }];
    const ship3 = new Ship(posArr3);
    const gameBoard = new Gameboard([ship1, ship2, ship3]);
    const computer = new Player(gameBoard);

    test.each([
        [0, true],
        [1, true],
        [2, true],
        [3, true],
        [4, true],
        [5, true],
        [6, true],
        [7, true],
        [8, true],
        [9, true],
        [10, true],
        [11, true],
        [12, true],
        [13, true],
        [14, true],
        [15, true],
        [16, true],
        [17, true],
        [18, true],
        [19, true],
        [20, true],
        [21, true],
        [22, true],
        [23, true],
        [24, true],
        [25, true],
        [26, true],
        [27, true],
        [28, true],
        [29, true],
        [30, true],
        [31, true],
        [32, true],
        [33, true],
        [34, true],
        [35, true],
        [36, true],
        [37, true],
        [38, true],
        [39, true],
        [40, true],
        [41, true],
        [42, true],
        [43, true],
        [44, true],
        [45, true],
        [46, true],
        [47, true],
        [48, true],
        [49, true],
        [50, true],
        [51, true],
        [52, true],
        [53, true],
        [54, true],
        [55, true],
        [56, true],
        [57, true],
        [58, true],
        [59, true],
        [60, true],
        [61, true],
        [62, true],
        [63, true],
        [64, true],
        [65, true],
        [66, true],
        [67, true],
        [68, true],
        [69, true],
        [70, true],
        [71, true],
        [72, true],
        [73, true],
        [74, true],
        [75, true],
        [76, true],
        [77, true],
        [78, true],
        [79, true],
        [80, true],
        [81, true],
        [82, true],
        [83, true],
        [84, true],
        [85, true],
        [86, true],
        [87, true],
        [88, true],
        [89, true],
        [90, true],
        [91, true],
        [92, true],
        [93, true],
        [94, true],
        [95, true],
        [96, true],
        [97, true],
        [98, true],
        [99, true],
    ])("Testing attack method in Player class", (index, expected) => {
        expect(computer.attack(index)).toBe(expected);
    });
});
//     test("Testing random attack method in Player class (board filled with attacks)", () => {
//         for (let i = 0; i < 100; i++) {
//             expect(computer.randomAttack()).toBe(true);
//         }
//     });
//     test("Testing random attack method in Player class (board empty with no attacks)", () => {
//         let posArr4 = [{ pos: 1, hit: true }, { pos: 2, hit: true }, { pos: 3, hit: true }];
//         const ship4 = new Ship(posArr4);
//         let posArr5 = [{ pos: 55, hit: true }, { pos: 65, hit: true }];
//         const ship5 = new Ship(posArr5);
//         let posArr6 = [{ pos: 90, hit: true }, { pos: 91, hit: true }, { pos: 92, hit: true }];
//         const ship6 = new Ship(posArr6);
//         const gameBoard2 = new Gameboard([ship4, ship5, ship6]);
//         const computer2 = new Player(gameBoard2);
//         for (let i = 0; i < 100; i++) {
//             expect(computer2.randomAttack()).toBe(true);
//         }
//     })
// });