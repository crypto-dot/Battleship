class Player {
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
        let randomPos;
        do {
            randomPos = Math.floor(Math.random() * 100);
        } while (!this.attack(randomPos));
    }
    getEnemyGameBoard() {
        return this.#enemyGameBoard;
    }
}

export default Player;