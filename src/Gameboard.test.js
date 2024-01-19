import Gameboard from "./Gameboard";

it("board constructor", () => {
    const b = new Gameboard();
    expect(b.board.length).toBe(10);
    expect(b.board).toEqual(Array(10).fill(Array(10).fill("U")));
    expect(b.ships).toEqual({});
});
it("place ship on empty cells", () => {
    const b = new Gameboard();
    b.placeShip(2, 3, 2);
    expect(b.board[3][1]).toEqual("U");
    expect(b.board[3][2]).toEqual({ id: 1, hit: false });
    expect(b.board[3][3]).toEqual({ id: 1, hit: false });
    expect(b.board[3][4]).toEqual("U");
});

it("receive attack on empty cell", () => {
    const b = new Gameboard();
    b.receiveAttack(0, 0);
    expect(b.board[0][0]).toBe("M");
});

it("receive attack on unhit ship", () => {
    const b = new Gameboard();
    b.placeShip(2, 3, 2);
    b.receiveAttack(3, 3);
    expect(b.board[3][3]).toEqual({ id: 1, hit: true });
});

it("check if player has ships left with no ships", () => {
    const b = new Gameboard();
    expect(b.doesPlayerHaveShipsLeft()).toBe(false);
});

it("check if player has ships left with 1 ship", () => {
    const b = new Gameboard();
    b.placeShip(4, 1, 1);
    expect(b.doesPlayerHaveShipsLeft()).toBe(true);
});
it("check if player has ships after sinking ship", () => {
    const b = new Gameboard();
    b.placeShip(4, 1, 1);
    b.receiveAttack(1, 1);
    b.receiveAttack(1, 2);
    b.receiveAttack(1, 3);
    b.receiveAttack(1, 4);
    expect(b.doesPlayerHaveShipsLeft()).toBe(false);
});
