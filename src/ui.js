function drawBoard(array, divId, hidden) {
    $(divId).empty();
    for (let i = 0; i < array.length; i += 1) {
        const num_cell = $(`<div>`).addClass("num_top").addClass("num_cell");
        num_cell.append($(`<p>`).text(`${i}`));
        $(divId).append(num_cell);
    }
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array[i].length; j += 1) {
            let cell = $(`<div>`).attr("id", `${i}_${j}`);
            if (array[i][j] === "U" || hidden) {
                cell.addClass("U");
            } else if (array[i][j] === "M") {
                cell.addClass("M");
            } else if (array[i][j]?.cellHit === true) {
                cell.addClass("hit");
            } else if (array[i][j]?.cellHit === false && !hidden) {
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

export { drawBoard, readClick, redrawCell };
