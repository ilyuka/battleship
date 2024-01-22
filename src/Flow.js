import PlaceMenu from "./PlaceMenu.js";
import Game from "./Game.js";
import * as GameUI from "./GameUI.js";

class Flow {
    constructor() {
        this.pm = new PlaceMenu(this);
        this.pm.mount();
        this.game = new Game(this, this.pm.defaultCoords, "def1", "Computer");
        GameUI.hideGameSection();
    }
}

export default Flow;
