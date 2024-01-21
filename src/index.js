import Game from "./Game.js";
import PlaceMenu from "./PlaceMenu.js";
import "./style.css";

const stopPlacingButton = $("<button>").text("start game");
stopPlacingButton.on("click", (e) => {
    $(e.target).hide();
    const shipsData = pm.returnShipData();
    const game = new Game(shipsData);
});
$("#content").append(stopPlacingButton);

const pm = new PlaceMenu();
