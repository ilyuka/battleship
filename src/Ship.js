class Ship {
    constructor(length = 0) {
        if (length <= 0) {
            throw new Error("incorrect length");
        } else {
            this.length = length;
        }
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
