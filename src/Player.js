class Player {
    constructor(gameboard, name = "Segismundo") {
        this.name = name;
        this.wins = 0;
        this.board = gameboard;
    }

    takeTurn(enemyBoard, x, y) {
        let res = enemyBoard.receiveAttack(x, y);
        if (enemyBoard.doesBoardHaveShipsLeft() === false) {
            this.wins += 1;
            return "won";
        } else {
            return res;
        }
    }

    takeRandomTurn(enemyBoard) {
        let res;
        let randomX;
        let randomY;
        while (res !== "missed" && res !== "hit") {
            randomX = Math.floor(Math.random() * 10);
            randomY = Math.floor(Math.random() * 10);
            res = enemyBoard.receiveAttack(randomX, randomY);
        }
        if (enemyBoard.doesBoardHaveShipsLeft() === false) {
            this.wins += 1;
            return "won";
        } else {
            return [res, randomX, randomY];
        }
    }
}

export default Player;
