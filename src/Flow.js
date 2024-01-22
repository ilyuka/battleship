import PlaceMenu from "./PlaceMenu.js";
import Game from "./Game.js";

class Flow {
    constructor() {
        this.pm = new PlaceMenu(this);
        this.pm.mount();
        this.game = new Game(this, this.pm.defaultCoords, "def1", "Computer");
    }
}

export default Flow;
