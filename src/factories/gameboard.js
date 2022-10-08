class Gameboard {
    #GAMEBOARD_SIZE = 100;
    #sunk_ships = 0;
    #posArr = Array(this.#GAMEBOARD_SIZE).fill({
        ship: false,
        hit: false
    });

    ;
    #arrOfShips = [];
    constructor(arrOfShips) {
        let positionsOfShips = [];
        for (let ship of arrOfShips) {
            this.#arrOfShips.push(ship);
            positionsOfShips.concat(...ship.getShipPos());
        }
        for (let pos of positionsOfShips) {
            this.#posArr[pos] = {
                ...this.#posArr,
                ship: true
            }
        }
    }
    hit(pos) {
        if (pos < 0 || pos > 99) {
            return false;
        }
        this.#posArr[pos] = {
            ...this.#posArr[pos],
            hit: true
        };
        for (let ship of this.#arrOfShips) {
            if (ship.hit(pos)) {
                if (ship.getIsSunk()) {
                    this.#sunk_ships++;
                }
                return true;
            }
        }
        return false;
    }
    isOccupied(pos) {
        return this.#posArr[pos].ship;
    }
    isHit(pos) {
        return this.#posArr[pos].hit;
    }
    allShipsSunk() {
        return this.#sunk_ships === this.#arrOfShips.length;
    }
}

export default Gameboard;