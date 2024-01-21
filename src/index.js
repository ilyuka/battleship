import Game from "./Game.js";
import PlaceMenu from "./PlaceMenu.js";
import "./style.css";

const pm = new PlaceMenu();
let game;

$("#board_game").hide();

$("#startgame").on("click", (e) => {
    const playerName = $("#playerName").val();
    $("#board_placement").hide();

    const shipsCoords = pm.returnUpdatedShipData();
    game = new Game(shipsCoords, playerName);

    $("#board_game").show();
});

$("#giveup").on("click", (e) => {
    $("#board_game").hide();
    game.removeClickListeners();
    $("#board_placement").show();
});
