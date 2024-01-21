import Ship from "./Ship.js";

it("ship constructor", () => {
    const ship = new Ship(3);
    expect(ship.length).toBe(3);
    expect(ship.hitTimes).toBe(0);
    expect(ship.sunk).toBe(false);
});
it("ship empty constructor", () => {
    expect(() => {
        /* eslint-disable-next-line no-unused-vars */
        const ship = new Ship();
    }).toThrow();
});
it("ship hit", () => {
    const ship = new Ship(3);
    expect(ship.hitTimes).toBe(0);
    ship.hit();
    expect(ship.hitTimes).toBe(1);
});
it("ship sunk", () => {
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
it("ship not sunk", () => {
    const ship = new Ship(3);
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
