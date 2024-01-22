import Gameboard from "./Gameboard.js";
import * as ui from "./ui.js";
import * as PlaceMenuUI from "./PlaceMenuUI.js";

export default class PlaceMenu {
    constructor(flowInstance) {
        this.isMoving = false;
        this.returnUpdatedShipData = this.returnUpdatedShipData.bind(this);
        this.defaultCoords = {
            "1_2": 3,
            "3_5": 2,
            "7_8": 2,
        };
        this.flowInstance = flowInstance;
        this.gb = new Gameboard(this.defaultCoords);
    }

    returnUpdatedShipData() {
        const shipsCoords = {};
        for (let i = 0; i < this.gb.board.length; i += 1) {
            for (let j = 0; j < this.gb.board[i].length; j += 1) {
                if (typeof this.gb.board[i][j] === "object") {
                    const id = this.gb.board[i][j].id;
                    const ship = this.gb.ships[id];
                    shipsCoords[`${ship.row}_${ship.col}`] = ship.length;
                }
            }
        }
        return shipsCoords;
    }

    mount() {
        ui.drawBoard(this.gb.board, "#gbplace", false);
        this.addDraggabilityForShips();
        PlaceMenuUI.showPlacementSection();
        PlaceMenuUI.addListenerForStartButton(this.startNewGame.bind(this));
    }
    unmount() {
        this.removeAllListeners();
        PlaceMenuUI.hidePlacementSection();
    }
    startNewGame() {
        const playerName = PlaceMenuUI.readNameInput() || "Segismundo";
        const updatedCoords = this.returnUpdatedShipData();
        this.flowInstance.game.mount(updatedCoords, playerName);
        this.unmount();
    }

    addDraggabilityForShips() {
        const ships = $("#gbplace")
            .children()
            .filter(function () {
                return $(this).hasClass("nothit");
            });

        ships.on("click", (e) => {
            if (!this.isMoving) {
                const initId = e.target.id.split("_");
                const row = Number(initId[0]);
                const col = Number(initId[1]);
                const shipId = this.gb.board[row][col].id;
                const ship = this.gb.ships[shipId];
                const initialCellsIds = [];
                for (let i = ship.col; i < ship.col + ship.length; i += 1) {
                    const cell_id = `${row}_${i}`;
                    initialCellsIds.push(cell_id);
                    $(`#${cell_id}`).addClass("selected");
                }
                // const direction = ...
                this.isMoving = true;
                this.addMouseEnter(shipId, ship, initialCellsIds);
            }
        });
    }

    addMouseEnter(shipId, ship, initialCellsIds) {
        $("#gbplace")
            .children()
            .map((index, child) => {
                $(child).on("mouseenter", (ev) => {
                    const newId = ev.target.id.split("_");
                    const newRow = Number(newId[0]);
                    const newCol = Number(newId[1]);
                    const canPlace = this.canPlace(
                        newRow,
                        newCol,
                        ship.length,
                        shipId
                    );
                    if (canPlace) {
                        PlaceMenuUI.paintAvailability(
                            newRow,
                            newCol,
                            ship.length,
                            "available"
                        );
                        $(child).on("mouseout", (ev) => {
                            PlaceMenuUI.removeAvailability(
                                newRow,
                                newCol,
                                ship.length,
                                "available"
                            );
                        });
                        $(child).on("click", (ev) => {
                            PlaceMenuUI.removePaintAsAvailable(
                                newRow,
                                newCol,
                                ship.length
                            );
                            this.cleanPreviousCells(initialCellsIds);
                            this.fillNewCells(
                                newRow,
                                newCol,
                                ship.length,
                                shipId
                            );
                            ui.drawBoard(this.gb.board, "#gbplace", false);
                            this.removeMouseEnter();
                            this.isMoving = false;
                        });
                    } else {
                        PlaceMenuUI.paintAvailability(
                            newRow,
                            newCol,
                            ship.length,
                            "unavailable"
                        );
                        $(child).on("mouseout", (ev) => {
                            PlaceMenuUI.removeAvailability(
                                newRow,
                                newCol,
                                ship.length,
                                "unavailable"
                            );
                        });
                        $(child).on("click", (ev) => {
                            ui.drawBoard(this.gb.board, "#gbplace", false);
                            this.removeMouseEnter();
                            this.isMoving = false;
                        });
                    }
                });
            });
    }
    removeMouseEnter() {
        $("#gbplace")
            .children()
            .map((index, child) => {
                $(child).off("mouseenter");
                $(child).off("over");
                $(child).off("click");
            });
        this.addDraggabilityForShips();
    }
    removeAllListeners() {
        PlaceMenuUI.removeAllListenersFromStartButton();
        $("#gbplace").off();
        $("#gbplace")
            .children()
            .map((index, child) => {
                $(child).off();
            });
    }

    canPlace(row, col, length, shipId) {
        if (col + length > this.gb.boardSize) {
            return false;
        }
        for (let i = col - 1; i < col + length + 1; i += 1) {
            if (
                this.gb.board[row - 1] &&
                typeof this.gb.board[row - 1][i] === "object" &&
                this.gb.board[row - 1][i].id !== shipId
            ) {
                return false;
            }
            if (
                typeof this.gb.board[row][i] === "object" &&
                this.gb.board[row][i].id !== shipId
            ) {
                return false;
            }
            if (
                this.gb.board[row + 1] &&
                typeof this.gb.board[row + 1][i] === "object" &&
                this.gb.board[row + 1][i].id !== shipId
            ) {
                return false;
            }
        }
        return true;
    }
    cleanPreviousCells(initialCellsIds) {
        initialCellsIds.forEach((id) => {
            const coords = id.split("_");
            const row = Number(coords[0]);
            const col = Number(coords[1]);
            this.gb.board[row][col] = "U";
        });
    }
    fillNewCells(row, col, length, shipId) {
        for (let i = col; i < col + length; i += 1) {
            this.gb.board[row][i] = {
                id: shipId,
                cellHit: false,
            };
        }
        this.gb.ships[shipId].row = row;
        this.gb.ships[shipId].col = col;
    }
}
