class Player {
    constructor(gameboard) {
        this.name = "Segismundo";
        this.wins = 0;
        this.board = gameboard;
    }

    takeTurn(enemyBoard, x, y) {
        if (!x && !y) {
            // for 'computer player'
            const randomX = Math.floor(Math.random() * 10);
            const randomY = Math.floor(Math.random() * 10);
            let res;
            do {
                res = enemyBoard.receiveAttack(randomX, randomY);
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
