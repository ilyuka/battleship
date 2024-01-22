const ID = "#board_game";
const INPUT_MSG_ID = "#input__message";
const ID_GB1 = "#gb1";
const ID_GB2 = "#gb2";
const RESTART_ID = "#restart";
const GIVEUP_ID = "#giveup";

function showGameSection() {
    $(ID).show();
}
function hideGameSection() {
    $(ID).hide();
}
function addBoard2Listener(fn) {
    $(ID_GB2).on("click", fn);
}
function removeBoard2Listener() {
    $(ID_GB2).off("click");
}

function addRestartButtonListener(fn) {
    $(RESTART_ID).on("click", fn);
}
function removeRestartButtonListener() {
    $(RESTART_ID).off();
}
function showRestartButton() {
    $(RESTART_ID).show();
}
function hideRestartButton() {
    $(RESTART_ID).hide();
}

function addGiveUpListener(fn) {
    $(GIVEUP_ID).on("click", fn);
}
function removeGiveUpListener() {
    $(GIVEUP_ID).off();
}

function removeAllListeners() {
    removeBoard2Listener();
    removeRestartButtonListener();
    removeGiveUpListener();
}

function updateMessage(text) {
    $(INPUT_MSG_ID).text(`${text}`);
}

function updatePlayersInfo(p1name, p1wins, p2name, p2wins) {
    console.log(p1name, p1wins, p2name, p2wins);
    $(`#p1__name`).text(p1name);
    $(`#p1__wins`).text(p1wins);
    $(`#p2__name`).text(p2name);
    $(`#p2__wins`).text(p2wins);
}

function handleWin(winnerName, p1name, p1wins, p2name, p2wins) {
    this.updateMessage(`${winnerName} has won!`);
    this.showRestartButton();
    this.removeBoard2Listener();
    this.updatePlayersInfo(p1name, p1wins, p2name, p2wins);
}

export {
    showGameSection,
    hideGameSection,
    addBoard2Listener,
    removeBoard2Listener,
    addRestartButtonListener,
    removeRestartButtonListener,
    showRestartButton,
    hideRestartButton,
    updateMessage,
    addGiveUpListener,
    removeAllListeners,
    updatePlayersInfo,
    handleWin,
};
