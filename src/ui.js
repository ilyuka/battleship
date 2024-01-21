function drawBoard(array, divId) {
    $(divId).empty();
    for (let i = 0; i < array.length; i += 1) {
        const num_cell = $(`<div>`).addClass("num_top").addClass("num_cell");
        num_cell.append($(`<p>`).text(`${i}`));
        $(divId).append(num_cell);
    }
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array[i].length; j += 1) {
            let cell = $(`<div>`).attr("id", `${i}${j}`);
            if (array[i][j] === "U") {
                cell.addClass("U");
            } else if (array[i][j] === "M") {
                cell.addClass("M");
            } else if (array[i][j]?.hit === true) {
                cell.addClass("hit");
            } else if (array[i][j]?.hit === false) {
                cell.addClass("nothit");
            } else {
                cell.addClass("test");
            }
            $(divId).append(cell);
        }
    }
}

function showWinMessage() {
    $("#input__message").text("you've won");
}
function showHitSameTwiceMessage() {
    $("#input__message").text("you've already hit there");
}

function readClick(eTarget) {
    let eltId = eTarget.id;
    if (Number.isNaN(Number(eltId))) {
        return [undefined, undefined];
    } else {
        eltId = Number(eltId);
        return [Math.floor(eltId / 10), eltId % 10];
    }
}

export { drawBoard, readClick, showHitSameTwiceMessage, showWinMessage };
