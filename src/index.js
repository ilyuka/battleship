import Player from "./Player.js";
import Gameboard from "./Gameboard.js";

import {
    drawBoard,
    readInput,
    clearInput,
    disableInputs,
    enableInputs,
    showHitSameTwiceMessage,
} from "./ui.js";
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
}

function fillShips() {
    gb1.placeShip(3, 0, 0);
    gb1.placeShip(3, 9, 0);
    gb1.placeShip(3, 5, 5);

    gb2.placeShip(3, 1, 1);
    gb2.placeShip(3, 8, 6);
    gb2.placeShip(3, 5, 2);

    updateShips();
}

function updateShips() {
    drawBoard(gb1.board, "#gb1");
    drawBoard(gb2.board, "#gb2");
}

function makeTurn() {
    console.log("currPlayer", currPlayer);

    if (currPlayer === "p1") {
        const [x, y] = readInput();
        console.log(x, y);
        if (x != undefined && y != undefined) {
            let res = player1.takeTurn(gb2, x, y);
            if (res !== "missed" && res !== "hit") {
                showHitSameTwiceMessage();
                return;
            }
            currPlayer = "p2";
            updateShips();
            clearInput();
            disableInputs();
            setTimeout(() => {
                player2.takeTurn(gb1);
                currPlayer = "p1";
                updateShips();
                clearInput();
                enableInputs();
            }, 250);
        }
    }
}

$("#input__submit").on("click", () => {
    makeTurn();
});

createGame();
