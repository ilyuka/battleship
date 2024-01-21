import Gameboard from "./Gameboard.js";
import Player from "./Player.js";
import * as ui from "./ui.js";

class Game {
    constructor(shipsCoords, name1, name2) {
        this.shipsCoords = shipsCoords;
        this.computerCoords = {
            "3_1": 4,
            // "7_3": 3,
            // "0_4": 2,
        };
        this.restartGame = this.restartGame.bind(this);
        this.removeClickListeners = this.removeClickListeners.bind(this);
        this.restartGame(name1 || "Segismundo", name2 || "Computer");
    }

    restartGame(name1, name2) {
        this.gb1 = new Gameboard(this.shipsCoords);
        this.gb2 = new Gameboard(this.computerCoords);
        this.player1 = new Player(this.gb1, this.gb2, name1);
        this.player2 = new Player(this.gb2, this.gb1, name2);
        this.currPlayerName = this.player1.name;

        this.handleRestartUI();
    }

    removeClickListeners() {
        console.log("removed clikcy");
        $("#gb2").off("click");
    }
    handleRestartUI() {
        ui.drawBoard(this.gb1.board, "#gb1");
        ui.drawBoard(this.gb2.board, "#gb2");
        ui.hideRestartButton();
        ui.showMessage("");
        ui.addBoardClick("#gb2", this.handleBoardClick.bind(this));
    }
    handleBoardClick(e) {
        this.makeTurn(e.target);
    }

    makeTurn(eTarget) {
        if (this.currPlayerName === this.player1.name) {
            const [row, col] = ui.readClick(eTarget);
            let res = this.player1.takeTurn(row, col);
            if (!Gameboard.validAnswers.includes(res)) {
                return;
            }
            if (res === "same twice") {
                ui.showMessage("can't hit the same cell twice");
                return;
            }
            ui.redrawCell("#gb2", eTarget.id, res);
            if (res === "won") {
                ui.showMessage(`${this.player1.name} has won`);
                ui.showRestartButton(() => {
                    this.removeClickListeners();
                    this.restartGame();
                });
                ui.removeBoardClick("#gb2");
                return;
            }

            this.currPlayer = "p2";
            setTimeout(() => {
                let [res, row, col] = this.player2.takeRandomTurn();
                ui.redrawCell("#gb1", `${row}_${col}`, res);
                // ??
                this.currPlayer = "p1";
                if (res === "won") {
                    ui.showMessage(`${this.player2.name} has won`);
                    ui.showRestartButton(() =>
                        this.restartGame(this.player1.name, this.player2.name)
                    );
                    ui.removeBoardClick("#gb2");
                    return;
                }
            }, 250);
        }
    }
}

export default Game;
