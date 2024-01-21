class Player {
    constructor(gameboard, name = "Segismundo") {
        this.name = name;
        this.wins = 0;
        this.board = gameboard;
    }

    takeTurn(enemyBoard, x, y) {
        if (!x && !y) {
            // for 'computer player'
            let randomX;
            let randomY;
            let res;

            do {
                randomX = Math.floor(Math.random() * 10);
                randomY = Math.floor(Math.random() * 10);
                res = enemyBoard.receiveAttack(randomX, randomY);
                break;
            } while (
                enemyBoard.doesBoardHaveShipsLeft() &&
                (res !== "hit" || res !== "missed")
            );
        } else {
            enemyBoard.receiveAttack(x, y);
        }
        if (enemyBoard.doesBoardHaveShipsLeft() === false) {
            this.wins += 1;
            return "won";
        }
    }
}

export default Player;
