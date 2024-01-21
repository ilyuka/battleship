import Player from "./Player.js";
import Gameboard from "./Gameboard.js";
import * as ui from "./ui.js";
import "./style.css";

let player1;
let player2;
let gb1;
let gb2;
let currPlayer = "p1";

function createGame() {
    gb1 = new Gameboard();
    player1 = new Player(gb1, "ilya");
    gb2 = new Gameboard();
    player2 = new Player(gb2, "computer");

    fillShips();
    updateBoards();
    ui.hideRestartButton();
    ui.showMessage("");
    addBoardClick();
}

function fillShips() {
    gb1.placeShip(1, 5, 5);
    gb1.placeShip(3, 9, 0);
    gb1.placeShip(3, 5, 5);

    gb2.placeShip(3, 1, 1);
    // gb2.placeShip(3, 8, 6);
    // gb2.placeShip(3, 5, 2);
}

function updateBoards() {
    ui.drawBoard(gb1.board, "#gb1");
    ui.drawBoard(gb2.board, "#gb2");
}

function makeTurn(eTarget) {
    const [x, y] = ui.readClick(eTarget);
    if (currPlayer === "p1") {
        let res = player1.takeTurn(gb2, x, y);
        if (!Gameboard.validAnswers.includes(res)) {
            return;
        }
        updateBoards();
        if (res === "won") {
            ui.showMessage(`${player1.name} has won`);
            ui.showRestartButton(createGame);
            removeBoardClick();
            return;
        }
        if (res === "same twice") {
            ui.showMessage("can't hit the same cell twice");
            return;
        }
        currPlayer = "p2";
        setTimeout(() => {
            let res = player2.takeRandomTurn(gb1);
            updateBoards();
            currPlayer = "p1";
            if (res === "won") {
                ui.showMessage(`${player2.name} has won`);
                ui.showRestartButton(createGame);
                removeBoardClick();
                return;
            }
        }, 250);
    }
}

function handleBoardClick(e) {
    makeTurn(e.target);
}
function removeBoardClick() {
    $("#gb2").off("click", handleBoardClick);
}
function addBoardClick() {
    $("#gb2").on("click", handleBoardClick);
}

createGame();
addBoardClick();
