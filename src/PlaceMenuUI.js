const ID = "#board_placement";
const NAME_INPUT_ID = "#playerName";
const START_BUTTON_ID = "#startgame";

function showPlacementSection() {
    $(ID).show();
}

function hidePlacementSection() {
    $(ID).hide();
}

function readNameInput() {
    return $(NAME_INPUT_ID).val();
}

function addListenerForStartButton(fn) {
    $(START_BUTTON_ID).on("click", fn);
}
function removeAllListenersFromStartButton() {
    $(START_BUTTON_ID).off();
}

export {
    showPlacementSection,
    hidePlacementSection,
    readNameInput,
    addListenerForStartButton,
    removeAllListenersFromStartButton,
};
