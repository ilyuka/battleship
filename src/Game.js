import Gameboard from "./Gameboard.js";
import Player from "./Player.js";
import * as ui from "./ui.js";
import * as GameUI from "./GameUI.js";

class Game {
    constructor(flowInstance, shipsCoords, name1, name2) {
        this.flowInstance = flowInstance;
        this.shipsCoords = shipsCoords;
        this.computerCoords = {
            "3_1": 4,
            "7_3": 3,
            "0_4": 2,
        };
        this.player1 = new Player(this.gb1, this.gb2, name1);
        this.player2 = new Player(this.gb2, this.gb1, name2);
    }

    mount(updatedCoords, name) {
        this.shipsCoords = updatedCoords;
        this.player1.board = new Gameboard(this.shipsCoords);
        this.player1.name = name === "" ? this.player1.name : name;
        this.player2.board = new Gameboard(this.computerCoords);
        this.player1.enemyBoard = this.player2.board;
        this.player2.enemyBoard = this.player1.board;

        this.currPlayerName = this.player1.name;

        ui.drawBoard(this.player1.board.board, "#gb1", false);
        ui.drawBoard(this.player2.board.board, "#gb2", true);
        GameUI.showGameSection();
        GameUI.updateMessage("");
        GameUI.hideRestartButton();
        GameUI.addBoard2Listener(this.handleBoardClick.bind(this));
        GameUI.addRestartButtonListener(this.remount.bind(this));
        GameUI.addGiveUpListener(this.unmount.bind(this));
        GameUI.updatePlayersInfo(
            this.player1.name,
            this.player1.wins,
            this.player2.name,
            this.player2.wins
        );
    }
    remount() {
        console.log("game remounted");
        this.gb1 = new Gameboard(this.shipsCoords);
        this.gb2 = new Gameboard(this.computerCoords);
        this.player1.board = this.gb1;
        this.player1.enemyBoard = this.gb2;
        this.player2.board = this.gb2;
        this.player2.enemyBoard = this.gb1;

        ui.drawBoard(this.gb1.board, "#gb1", false);
        ui.drawBoard(this.gb2.board, "#gb2", true);
        GameUI.updateMessage("");
        GameUI.hideRestartButton();
        GameUI.addBoard2Listener(this.handleBoardClick.bind(this));
    }
    unmount() {
        console.log("game unmounted");
        GameUI.hideGameSection();
        GameUI.removeAllListeners();
        this.flowInstance.pm.mount();
    }

    handleBoardClick(e) {
        this.makeTurn(e.target);
    }

    makeTurn(eTarget) {
        if (this.currPlayerName !== this.player1.name) {
            return;
        }
        const [row, col] = ui.readClick(eTarget);
        let res = this.player1.takeTurn(row, col);
        if (!Gameboard.validAnswers.includes(res)) {
            return;
        }
        if (res === "same twice") {
            GameUI.updateMessage("can't hit the same cell twice");
            return;
        }
        ui.redrawCell("#gb2", eTarget.id, res);
        if (res === "won") {
            GameUI.handleWin(
                this.player1.name,
                this.player1.name,
                this.player1.wins,
                this.player2.name,
                this.player2.wins
            );

            return;
        }

        this.currPlayer = "p2";
        setTimeout(() => {
            let [res, row, col] = this.player2.takeRandomTurn();
            ui.redrawCell("#gb1", `${row}_${col}`, res);
            this.currPlayer = "p1";
            if (res === "won") {
                GameUI.handleWin(
                    this.player2.name,
                    this.player1.name,
                    this.player1.wins,
                    this.player2.name,
                    this.player2.wins
                );
                return;
            }
        }, 250);
    }
}

export default Game;
