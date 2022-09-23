class Ship {
    #posArr = [];
    #isSunk = false;
    constructor(posArr) {
        this.#posArr = posArr;
    }
    hit(pos) {
        for (let i = 0; i < this.#posArr.length; i++) {
            if (this.#posArr[i].pos === pos) {
                this.#posArr[i].hit = true;
                this.#checkIfSunk();
                return true;
            }
        }
        return false;
    }
    #checkIfSunk() {
        let sunkPositions = this.#posArr.filter(posObj => posObj.hit === true);
        if (sunkPositions.length === this.#posArr.length) {
            this.#isSunk = true;
        }
    }
    getIsSunk() {
        return this.#isSunk;
    }
    getShipPos() {
        let positions = [];
        for (let position of this.#posArr) {
            positions.push(position.pos);
        }
        return positions;
    }

}

export default Ship;