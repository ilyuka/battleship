import Ship from "./Ship";

class Gameboard {
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
        const ship = new Ship(shipLength);
        this.shipCounter += 1;
        this.ships[this.shipCounter] = ship;

        if (this.boardSize - y >= shipLength) {
            for (let i = y; i < this.boardSize; i += 1) {
                this.board[x][y] = { id: this.shipCounter, hit: false };
            }
        } else {
            throw new Error("incorrect y coord");
        }
    }

    receiveAttack(x, y) {
        if (x < 0 || x >= this.boardSize || y < 0 || y >= this.boardSize) {
            throw new Error("incorrect coords");
        }
        let cell = this.board[x][y];
        if (typeof cell === "object") {
            if (this.cell.hit == undefined) {
                throw new Error("cell constructed wrong");
            }
            if (this.cell.hit === false) {
                this.cell.hit = true;
                this.ships[this.cell.id].hit();
            } else {
                return "hit already";
            }
        } else if (typeof cell === "string") {
            if (cell === "M") {
                // M - missed
                return "missed already";
            }
            if (cell === "U") {
                // U - untouched
                cell = "M";
                return "missed";
            }
        } else {
            throw new Error("cell is broken");
        }
    }

    doesPlayerHaveShipsLeft() {
        for (let i = 1; i < this.ships.length; i += 1) {
            if (this.ships[i].isSunk()) {
                return true;
            }
        }
        return false;
    }
}

export default Gameboard;
