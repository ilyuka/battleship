import Player from "./Player.js";
import Gameboard from "./Gameboard.js";

import { drawBoard } from "./ui.js";
import "./style.css";

let player1;
let player2;
let gb1;
let gb2;

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

function turn1() {
    let coords = prompt("coords: <x y>").split(" ");
    const x = Number(coords[0]);
    const y = Number(coords[1]);
    console.log(player1.takeTurn(gb2, x, y));
    console.log(gb2);
    updateShips();
    // turn2();
}

function turn2() {
    console.log(player2.takeTurn(gb1));
    console.log(gb1);
    updateShips();
    turn1();
}

createGame();
turn1();
