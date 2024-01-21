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
    updateShips();
}

function fillShips() {
    gb1.placeShip(3, 0, 0);
    gb1.placeShip(3, 9, 0);
    gb1.placeShip(3, 5, 5);

    gb2.placeShip(3, 1, 1);
    gb2.placeShip(3, 8, 6);
    gb2.placeShip(3, 5, 2);
}

function updateShips() {
    ui.drawBoard(gb1.board, "#gb1");
    ui.drawBoard(gb2.board, "#gb2");
}

function makeTurn(eTarget) {
    console.log("currPlayer", currPlayer);
    const [x, y] = ui.readClick(eTarget);
    if (currPlayer === "p1") {
        if (x != undefined && y != undefined) {
            let res = player1.takeTurn(gb2, x, y);
            if (res === "won") {
                ui.showWinMessage();
                removeClick();
                return;
            }
            if (res !== "missed" && res !== "hit") {
                ui.showHitSameTwiceMessage();
                return;
            }
            currPlayer = "p2";
            updateShips();
            setTimeout(() => {
                let res = player2.takeTurn(gb1);
                currPlayer = "p1";
                updateShips();
                if (res === "won") {
                    ui.showWinMessage();
                    return;
                }
            }, 550);
        }
    }
}

function handleClick(e) {
    makeTurn(e.target);
}
function removeClick() {
    $("#gb2").off("click", handleClick);
}
function addClick() {
    $("#gb2").on("click", handleClick);
}

createGame();
addClick();
