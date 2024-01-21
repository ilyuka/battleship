import Gameboard from "./Gameboard.js";
import * as ui from "./ui.js";

export default class PlaceMenu {
    constructor() {
        this.startPlaceMenu();

        this.isMoving = false;
        this.move = this.move.bind(this);
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
            // const length = this.gb.board[x][y].length;
            // console.log(initId, x, y, length);
            // const direction = ...
            if (!this.isMoving) {
                this.isMoving = true;
                this.addMouseEnter(initId, x, y, shipRef);
            }
        });
    }

    addMouseEnter(initId, x, y, shipRef) {
        $("#gbplace")
            .children()
            .map((index, child) => {
                // $(child).on("mouseenter", (ev) => {
                //     console.log(ev.target);
                // });
                $(child).on("click", (ev) => {
                    // $(`#${initId}`).removeClass("nothit");
                    this.gb.board[x][y] = "U";
                    const newId = ev.target.id;
                    const newX = Math.floor(newId / 10);
                    const newY = newId % 10;
                    this.gb.board[newX][newY] = shipRef;
                    this.updateBoard();

                    // $(ev.target).addClass("nothit");
                    // console.log("end", ev.target);
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
        // this.gb.placeShip(3, 9, 0);
        // this.gb.placeShip(3, 5, 5);
    }
}
