class Player {
    #name = '';
    #enemyGameBoard;
    constructor(enemyGameBoard) {
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
        let count = 0;
        let randomPos;
        do {
            randomPos = Math.floor(Math.random() * 100);
            count++;
        } while (!this.attack(randomPos) && count != 100);
        return this.attack(randomPos);
    }
    didWin() {
        return this.#enemyGameBoard.allShipsSunken();
    }
    getEnemyGameBoard() {
        return this.#enemyGameBoard;
    }
}

export default Player;