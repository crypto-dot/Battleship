class Ship {
    #length;
    #hitCount = 0;
    #posArr = [];
    #isSunk = false;
    constructor(length, posArr) {
        this.#length = length;
        this.posArr = posArr;
    }
    hit(pos) {
        for (let i = 0; i < this.#posArr.length; i++) {
            if (this.#posArr[i].pos === pos) {
                this.#posArr[i].hit = true;
                checkIfSunk();
                break;
            }
        }
    }
    checkIfSunk() {
        let sunkPositions = this.#posArr.filter(posObj => posObj.hit === true);
        if (sunkPositions.length === this.#posArr.length) {
            this.#isSunk = true;
        }
    }
    getIsSunk() {
        return this.#isSunk;
    }
}

export default Ship;