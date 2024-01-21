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

function showHitSameTwiceMessage() {
    $("#input__message").text("you've already hit there");
}

function readInput() {
    const x = $("#coords_x");
    const y = $("#coords_y");
    if (x.val() === "" || y.val() === "") {
        $("#input__message").text(
            "check if input is correct (should be numbers 0-9)"
        );
        return [undefined, undefined];
    }
    const x_val = Number(x.val());
    const y_val = Number(y.val());
    if (validateCoordInput(x, x_val) && validateCoordInput(y, y_val)) {
        $("#input__message").text(`good!: ${x_val}, ${y_val}`);
        return [y_val, x_val];
    } else {
        $("#input__message").text(
            "check if input is correct (should be numbers 0-9)"
        );
        return [undefined, undefined];
    }
}
function clearInput() {
    $("#coords_x").val("");
    $("#coords_y").val("");
}

function disableInputs() {
    $("#coords_x").prop("disabled", true); // jQuery 1.6+
    $("#coords_x").attr("disabled", "disabled"); // jQuery 1.5 and below
    $("#coords_y").prop("disabled", true); // jQuery 1.6+
    $("#coords_y").attr("disabled", "disabled"); // jQuery 1.5 and below
}
function enableInputs() {
    $("#coords_x").prop("disabled", false); // jQuery 1.6+
    $("#coords_x").removeAttr("disabled"); // jQuery 1.5 and below
    $("#coords_y").prop("disabled", false); // jQuery 1.6+
    $("#coords_y").removeAttr("disabled"); // jQuery 1.5 and below
}

function validateCoordInput(field, value) {
    if (value === 0) {
        return true;
    }
    if (Number.isNaN(value)) {
        return false;
    }
    if (!value) {
        return false;
    }
    if (
        value < Number(field.attr("min")) ||
        value > Number(field.attr("max"))
    ) {
        return false;
    }
    return true;
}

export {
    drawBoard,
    readInput,
    clearInput,
    disableInputs,
    enableInputs,
    showHitSameTwiceMessage,
};
