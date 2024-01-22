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

function paintAvailability(newRow, newCol, shipLength, className) {
    if (className === "available") {
        for (let i = 0; i < shipLength; i += 1) {
            const id = `#${newRow}_${newCol + i}`;
            $(id).addClass("available");
        }
    } else if (className === "unavailable") {
        for (let i = 0; i < shipLength && i < 10; i += 1) {
            const id = `#${newRow}_${newCol + i}`;
            $(id).addClass("unavailable");
        }
    }
}
function removeAvailability(newRow, newCol, shipLength, className) {
    if (className === "available") {
        for (let i = 0; i < shipLength; i += 1) {
            const id = `#${newRow}_${newCol + i}`;
            $(id).removeClass("available");
        }
    } else if (className === "unavailable") {
        for (let i = 0; i < shipLength && i < 10; i += 1) {
            const id = `#${newRow}_${newCol + i}`;
            $(id).removeClass("unavailable");
        }
    }
}

function paintAsAvailable(newRow, newCol, shipLength) {
    for (let i = 0; i < shipLength; i += 1) {
        const id = `#${newRow}_${newCol + i}`;
        $(id).addClass("available");
    }
}
function removePaintAsAvailable(newRow, newCol, shipLength) {
    for (let i = 0; i < shipLength; i += 1) {
        const id = `#${newRow}_${newCol + i}`;
        $(id).removeClass("available");
    }
}

export {
    showPlacementSection,
    hidePlacementSection,
    readNameInput,
    addListenerForStartButton,
    removeAllListenersFromStartButton,
    paintAsAvailable,
    removePaintAsAvailable,
    paintAvailability,
    removeAvailability,
};
