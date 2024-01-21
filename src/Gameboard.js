import Ship from "./Ship.js";

class Gameboard {
    static validAnswers = ["hit", "missed", "same twice", "won"];
    constructor(shipsCoords) {
        this.boardSize = 10;
        this.board = new Array(this.boardSize);
        for (let i = 0; i < this.boardSize; i += 1) {
            this.board[i] = new Array(this.boardSize).fill("U"); // U - untouched
        }
        this.shipCounter = 0;
        this.ships = {};
        this.fillShips(shipsCoords);
    }

    fillShips(shipsCoords) {
        if (!shipsCoords) {
            return;
        }
        for (const key in shipsCoords) {
            const coords = key.split("_");
            const length = shipsCoords[key];
            this.placeShip(
                Number(length),
                Number(coords[0]),
                Number(coords[1])
            );
        }
    }

    placeShip(shipLength, row, col) {
        if (
            row < 0 ||
            row >= this.boardSize ||
            col < 0 ||
            col >= this.boardSize
        ) {
            throw new Error("incorrect coords");
        }
        const ship = new Ship(row, col, shipLength);
        this.ships[++this.shipCounter] = ship;

        if (this.boardSize - col >= shipLength) {
            for (let i = col; i < col + shipLength; i += 1) {
                this.board[row][i] = {
                    id: this.shipCounter,
                    cellHit: false,
                };
            }
        } else {
            throw new Error("ship out of bound");
        }
    }

    validateAttack(row, col) {
        if ((row !== 0 && !row) || (col !== 0 && !col)) {
            return "incorrect coords type";
        }
        if (
            row < 0 ||
            row >= this.boardSize ||
            col < 0 ||
            col >= this.boardSize
        ) {
            return "coords out of bound";
        }
        if (typeof this.board[row][col] === "object") {
            if (this.board[row][col].cellHit === undefined) {
                return "cell constructed wrong";
            }
        } else if (
            this.board[row][col] !== "M" &&
            this.board[row][col] !== "U"
        ) {
            return "wrong cell data";
        }
        return "ok";
    }

    receiveAttack(row, col) {
        const valid = this.validateAttack(row, col);
        if (valid !== "ok") return valid;

        if (typeof this.board[row][col] === "object") {
            if (this.board[row][col].cellHit === false) {
                this.board[row][col].cellHit = true;
                this.ships[this.board[row][col].id].hit();
                return "hit";
            }
            return "same twice";
        }
        if (typeof this.board[row][col] === "string") {
            if (this.board[row][col] === "M") {
                // M - missed
                console.log(this.board);
                console.log(this.board[row][col]);
                return "same twice";
            }
            if (this.board[row][col] === "U") {
                // U - untouched
                this.board[row][col] = "M";
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
