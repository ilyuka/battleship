class Ship {
    constructor(length) {
        this.length = length;
        this.hitTimes = 0;
        this.sunk = false;
    }

    hit() {
        this.hitTimes += 1;
    }

    isSunk() {
        return this.hitTimes >= this.length;
    }
}

export default Ship;
