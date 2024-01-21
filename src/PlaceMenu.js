import Gameboard from "./Gameboard.js";
import * as ui from "./ui.js";

export default class PlaceMenu {
    constructor() {
        this.startPlaceMenu();

        this.isMoving = false;
        this.move = this.move.bind(this);
        this.returnShipData = this.returnShipData.bind(this);
    }

    returnShipData() {
        const shipsCoords = {};
        for (let i = 0; i < this.gb.board.length; i += 1) {
            for (let j = 0; j < this.gb.board[i].length; j += 1) {
                if (typeof this.gb.board[i][j] === "object") {
                    let ship = this.gb.board[i][j];
                    shipsCoords[`${ship.x}${ship.y}`] = ship.length;
                }
            }
        }
        console.log(shipsCoords);
        return shipsCoords;
    }

    startPlaceMenu() {
        this.gb = new Gameboard();
        this.fillShips();
        this.updateBoard();
        this.addDraggabilityForShips();
    }

    addDraggabilityForShips() {
        const ships = $("#gbplace")
            .children()
            .filter(function () {
                return $(this).hasClass("nothit");
            });
        ships.on("click", (e) => {
            const initId = e.target.id;
            const x = Math.floor(initId / 10);
            const y = initId % 10;
            const shipRef = this.gb.board[x][y];
            const shipIds = [];
            for (let i = shipRef.y; i < shipRef.y + shipRef.length; i += 1) {
                shipIds.push(this.gb.board[x][i]);
            }
            // console.log(initId, x, y, length);
            // const direction = ...
            if (!this.isMoving) {
                this.isMoving = true;
                this.addMouseEnter(
                    initId,
                    shipRef.x,
                    shipRef.y,
                    shipRef,
                    shipIds
                );
            }
        });
    }

    addMouseEnter(initId, x, y, shipRef, shipIds) {
        $("#gbplace")
            .children()
            .map((index, child) => {
                $(child).on("click", (ev) => {
                    // checkValidity
                    const newId = ev.target.id;
                    const newX = Math.floor(newId / 10);
                    const newY = newId % 10;
                    let canUpdate = true;
                    for (let i = newY; i < newY + shipRef.length; i += 1) {
                        // check out of bound
                        if (i >= this.gb.boardSize) {
                            console.log("out of bounds");
                            canUpdate = false;
                        }
                        // check if overlapping
                        if (typeof this.gb.board[newX][i] === "object") {
                            console.log(`${newX} ${i} is taken!`);
                            canUpdate = false;
                        }
                        // check if adjacent
                    }
                    if (canUpdate) {
                        // upd prev loc
                        for (let i = y; i < y + shipRef.length; i += 1) {
                            this.gb.board[x][i] = "U";
                        }
                        //upd new loc
                        for (let i = newY; i < newY + shipRef.length; i += 1) {
                            this.gb.board[newX][i] = shipIds[i - newY];
                        }
                        shipRef.x = newX;
                        shipRef.y = newY;
                    }

                    this.updateBoard();

                    this.removeMouseEnter();
                    this.isMoving = false;
                    console.log(this.gb.board);
                });
            });
    }
    removeMouseEnter() {
        $("#gbplace")
            .children()
            .map((index, child) => {
                $(child).off("mouseenter");
                $(child).off("click");
            });
        this.addDraggabilityForShips();
    }

    move(e) {
        console.log("target", e.target);
        const elt = e.currentTarget;
        $(elt).on("click", (e2) => {
            this.isMoving = false;
            $(elt).off("mouseover");
            $(elt).off("click");
            $(e2.target).addClass("nothit");
            console.log(e2.target);
        });
    }

    updateBoard() {
        ui.drawBoard(this.gb.board, "#gbplace");
    }

    fillShips() {
        this.gb.placeShip(1, 0, 2);
        this.gb.placeShip(3, 9, 0);
        this.gb.placeShip(3, 5, 5);
    }
}
