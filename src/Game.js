import Gameboard from "./Gameboard.js";
import Player from "./Player.js";
import * as ui from "./ui.js";

class Game {
    constructor(shipsCoords, name1 = "Segismundo", name2 = "Computer") {
        this.restartGame = this.restartGame.bind(this);
        this.shipsToFill = shipsCoords;
        this.restartGame(name1 || "Segismundo", name2 || "Computer");
    }

    restartGame(name1, name2) {
        this.gb1 = new Gameboard();
        this.player1 = new Player(this.gb1, name1);
        this.gb2 = new Gameboard();
        this.player2 = new Player(this.gb2, name2);
        this.currPlayer = "p1";

        this.fillShips();
        this.updateBoards();
        ui.hideRestartButton();
        ui.showMessage("");
        ui.addBoardClick(this.handleBoardClick.bind(this));
    }

    handleBoardClick(e) {
        this.makeTurn(e.target);
    }
    fillShips() {
        for (const key in this.shipsToFill) {
            const x = key[0];
            const y = key[1];
            const length = this.shipsToFill[key];
            this.gb1.placeShip(Number(length), Number(x), Number(y));
        }

        this.gb2.placeShip(3, 1, 1);
        this.gb2.placeShip(3, 8, 6);
        this.gb2.placeShip(3, 5, 2);
    }
    updateBoards() {
        ui.drawBoard(this.gb1.board, "#gb1");
        ui.drawBoard(this.gb2.board, "#gb2");
    }
    makeTurn(eTarget) {
        const [x, y] = ui.readClick(eTarget);
        if (this.currPlayer === "p1") {
            let res = this.player1.takeTurn(this.gb2, x, y);
            if (!Gameboard.validAnswers.includes(res)) {
                return;
            }
            this.updateBoards();
            if (res === "won") {
                ui.showMessage(`${this.player1.name} has won`);
                ui.showRestartButton(this.restartGame);
                ui.removeBoardClick();
                return;
            }
            if (res === "same twice") {
                ui.showMessage("can't hit the same cell twice");
                return;
            }
            this.currPlayer = "p2";
            setTimeout(() => {
                let res = this.player2.takeRandomTurn(this.gb1);
                this.updateBoards();
                this.currPlayer = "p1";
                if (res === "won") {
                    ui.showMessage(`${this.player2.name} has won`);
                    ui.showRestartButton(() =>
                        this.restartGame(this.player1.name, this.player2.name)
                    );
                    ui.removeBoardClick();
                    return;
                }
            }, 250);
        }
    }
}

export default Game;
