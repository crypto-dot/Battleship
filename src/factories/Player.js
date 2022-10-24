import { shuffle } from "../Shuffle";
class Player {
    #name;
    #enemyGameBoard;
    #possibleAttacks = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
        70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
        80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
        90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
    #shuffled = false;
    constructor(enemyGameBoard, name = 'COMPUTER') {
        this.#enemyGameBoard = enemyGameBoard;
    }
    attack(pos) {
        if (this.#enemyGameBoard.isHit(pos)) {
            return false;
        }
        this.#enemyGameBoard.hit(pos);
        return true;
    }
    randomAttack() {
        if (!this.#shuffled) {
            this.#possibleAttacks = shuffle(this.#possibleAttacks);
            this.#shuffled = true;
        }
        if (this.#possibleAttacks.length > 0) {
            return this.attack(this.#possibleAttacks.pop());
        } else {
            return false;
        }
    }
    didWin() {
        return this.#enemyGameBoard.allShipsSunken();
    }
    getEnemyGameBoard() {
        return this.#enemyGameBoard;
    }
    getName() {
        return this.#name;
    }
}

export default Player;