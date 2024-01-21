class Player {
    constructor(gameboard, enemyBoard, name = "Segismundo") {
        this.name = name;
        this.wins = 0;
        this.board = gameboard;
        this.enemyBoard = enemyBoard;
    }

    takeTurn(row, col) {
        let res = this.enemyBoard.receiveAttack(row, col);
        if (this.enemyBoard.doesBoardHaveShipsLeft() === false) {
            this.wins += 1;
            return "won";
        } else {
            return res;
        }
    }

    takeRandomTurn() {
        let res;
        let randomRow;
        let randomCol;
        while (res !== "missed" && res !== "hit") {
            randomRow = Math.floor(Math.random() * 10);
            randomCol = Math.floor(Math.random() * 10);
            res = this.enemyBoard.receiveAttack(randomRow, randomCol);
        }
        if (this.enemyBoard.doesBoardHaveShipsLeft() === false) {
            this.wins += 1;
            return "won";
        } else {
            return [res, randomRow, randomCol];
        }
    }
}

export default Player;
