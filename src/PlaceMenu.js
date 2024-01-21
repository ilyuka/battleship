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

        this.addDraggability();
    }

    addDraggability() {
        const ships = $("#gbplace")
            .children()
            .filter(function () {
                return $(this).hasClass("nothit");
            });
        ships.on("click", (e) => {
            let coords = e.target.id;
            let x = Math.floor(coords / 10);
            let y = coords % 10;
            console.log(this.gb.board[x][y]);
            if (!this.isMoving) {
                this.isMoving = true;
            }
            $("#gbplace").on("mouseover", (e) => {
                if (this.isMoving) {
                    this.move(e);
                }
            });
        });
    }

    move(e) {
        console.log("target", e.target);
        const elt = e.currentTarget;
        $(elt).on("click", () => {
            this.isMoving = false;
            $(elt).off("mouseover");
            $(elt).off("click");
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
