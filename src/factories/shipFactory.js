class Ship {
    #length = 0;
    #name = '';
    #posArr = [];
    #isSunk = false;
    constructor(posArr, name = 'default', length = 0) {
        this.#posArr = posArr;
        this.#name = name;
        this.#length = length;
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
    getName() {
        return this.#name;
    }
    getLength() {
        return this.#length;
    }
    setPosArr(posArr) {
        this.#posArr = posArr;
    }
}

export default Ship;