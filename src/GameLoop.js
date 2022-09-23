class GameLoop {
    #player1;
    #player2;
    constructor(player1, player2) {
        this.#player1 = player1;
        this.#player2 = player2;
    }
    start() {
        do {

        } while (!this.#player1.getEnemyGameBoard().allShipsSunk() || !this.#player2.getEnemyGameBoard().allShipsSunk())
    }
}
export default GameLoop;