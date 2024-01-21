class Player {
    constructor(gameboard, name = "Segismundo") {
        this.name = name;
        this.wins = 0;
        this.board = gameboard;
    }

    takeTurn(enemyBoard, x, y) {
        let res;
        if (!x || !y) {
            let randomX;
            let randomY;
            while (res !== "missed" && res !== "hit") {
                randomX = Math.floor(Math.random() * 10);
                randomY = Math.floor(Math.random() * 10);
                // console.log("randomX", randomX, " randomY", randomY);
                res = enemyBoard.receiveAttack(randomX, randomY);
                // console.log("newRes", res);
            }
        } else {
            res = enemyBoard.receiveAttack(x, y);
        }
        // console.log("final res", res);

        if (enemyBoard.doesBoardHaveShipsLeft() === false) {
            this.wins += 1;
            return "won";
        } else {
            return res;
        }
    }
}

export default Player;
