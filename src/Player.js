class Player {
    #enemyGameBoard;
    constructor(enemyGameBoard) {
        this.#enemyGameBoard = enemyGameBoard;
    }
    attack(pos) {
        this.#enemyGameBoard.hit(pos);
    }
    randomAttack() {
        let randomPos;
        do {
            randomPos = Math.floor(Math.random() * 100);
        } while (!this.#enemyGameBoard.isHit(randomPos));
        this.#enemyGameBoard.hit(randomPos);
    }
    getEnemyGameBoard() {
        return this.#enemyGameBoard;
    }
}

export default Player;