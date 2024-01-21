function drawBoard(array, divId) {
    $(divId).empty();
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

export { drawBoard };
