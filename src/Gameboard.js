import Ship from "./Ship.js";

class Gameboard {
    static validAnswers = ["hit", "missed", "same twice", "won"];
    constructor() {
        this.boardSize = 10;
        this.board = new Array(this.boardSize);
        for (let i = 0; i < this.boardSize; i += 1) {
            this.board[i] = new Array(this.boardSize).fill("U"); // U - untouched
        }
        this.shipCounter = 0;
        this.ships = {};
    }

    placeShip(shipLength, x, y) {
        if (x < 0 || x >= this.boardSize || y < 0 || y >= this.boardSize) {
            throw new Error("incorrect coords");
        }
        const ship = new Ship(shipLength);
        this.shipCounter += 1;
        this.ships[this.shipCounter] = ship;

        if (this.boardSize - y >= shipLength) {
            for (let i = y; i < y + shipLength; i += 1) {
                this.board[x][i] = {
                    id: this.shipCounter,
                    hit: false,
                    x: x,
                    y: y,
                    length: ship.length,
                };
            }
        } else {
            throw new Error("ship too long, can't fit");
        }
    }

    validateAttack(x, y) {
        if ((x !== 0 && !x) || (y !== 0 && !y)) {
            return "incorrect coords type";
        }
        if (x < 0 || x >= this.boardSize || y < 0 || y >= this.boardSize) {
            return "coords out of bound";
        }
        if (typeof this.board[x][y] === "object") {
            if (this.board[x][y].hit === undefined) {
                return "cell constructed wrong";
            }
        } else if (this.board[x][y] !== "M" && this.board[x][y] !== "U") {
            return "wrong cell data";
        }
        return "ok";
    }

    receiveAttack(x, y) {
        const valid = this.validateAttack(x, y);
        if (valid !== "ok") return valid;

        if (typeof this.board[x][y] === "object") {
            if (this.board[x][y].hit === false) {
                this.board[x][y].hit = true;
                this.ships[this.board[x][y].id].hit();
                return "hit";
            }
            return "same twice";
        }
        if (typeof this.board[x][y] === "string") {
            if (this.board[x][y] === "M") {
                // M - missed
                return "same twice";
            }
            if (this.board[x][y] === "U") {
                // U - untouched
                this.board[x][y] = "M";
                return "missed";
            }
        } else {
            return "cell is broken";
        }
    }

    doesBoardHaveShipsLeft() {
        for (const key of Object.keys(this.ships)) {
            if (Object.prototype.hasOwnProperty.call(this.ships, key)) {
                if (this.ships[key].isSunk() === false) {
                    return true;
                }
            }
        }
        return false;
    }
}

export default Gameboard;
