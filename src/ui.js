function drawBoard(array, divId) {
    $(divId).empty();
    for (let i = 0; i < array.length; i += 1) {
        const num_cell = $(`<div>`).addClass("num_top").addClass("num_cell");
        num_cell.append($(`<p>`).text(`${i}`));
        $(divId).append(num_cell);
    }
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array[i].length; j += 1) {
            let cell = $(`<div>`).attr("id", `${i}_${j}`);
            if (array[i][j] === "U") {
                cell.addClass("U");
            } else if (array[i][j] === "M") {
                cell.addClass("M");
            } else if (array[i][j]?.cellHit === true) {
                cell.addClass("hit");
            } else if (array[i][j]?.cellHit === false) {
                cell.addClass("nothit");
            } else {
                cell.addClass("test");
            }
            $(divId).append(cell);
        }
    }
}

function redrawCell(boardId, cellId, cellStatus) {
    const cell = $(boardId).find(`#${cellId}`);
    if (cellStatus === "won" || cellStatus === "hit") {
        cell.removeClass("nothit");
        cell.addClass("hit");
        return;
    }
    if (cellStatus === "missed") {
        cell.removeClass("U");
        cell.addClass("M");
        return;
    }
}

function showMessage(text) {
    $("#input__message").text(`${text}`);
}
function showRestartButton(restartFunction) {
    $("#restart").show();
    $("#restart").on("click", () => {
        hideRestartButton();
        restartFunction();
    });
}
function hideRestartButton() {
    $("#restart").hide();
}

function readClick(eTarget) {
    let eltId = eTarget.id.split("_");
    const x = Number(eltId[0]);
    const y = Number(eltId[1]);
    if (Number.isNaN(x) || Number.isNaN(y)) {
        return [undefined, undefined];
    } else {
        return [x, y];
    }
}

function removeBoardClick(boardId) {
    console.log("removed clikcy");
    $(boardId).off("click");
}
function addBoardClick(boardId, fn) {
    console.log("added clicky");
    $(boardId).on("click", fn);
}

export {
    drawBoard,
    readClick,
    showMessage,
    showRestartButton,
    hideRestartButton,
    removeBoardClick,
    addBoardClick,
    redrawCell,
};
