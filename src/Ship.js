class Ship {
    constructor(row, col, length) {
        if (!length || length <= 0) {
            throw new Error("incorrect length");
        } else {
            this.length = length;
        }
        this.row = row;
        this.col = col;
        this.hitTimes = 0;
    }

    hit() {
        this.hitTimes += 1;
    }

    isSunk() {
        return this.hitTimes >= this.length;
    }
}

export default Ship;
