import Ship from "../factories/shipFactory";
describe(
    "Testing Ship class", () => {
        let posArr = [{ pos: 1, hit: false }, { pos: 2, hit: false }, { pos: 3, hit: false }];
        const ship1 = new Ship(posArr);

        test("Testing hit function on Ship object when ship is hit", () => {
            expect(ship1.hit(2)).toBe(true);
        });
        test("Testing hit function on Ship object when ship is not hit", () => {
            expect(ship1.hit(4)).toBe(false);
        });
        test("Testing if ship correctly stays afloat", () => {
            ship1.hit(1);
            expect(ship1.getIsSunk()).toBe(false);
        });
        test("Testing if ship correctly sinks", () => {
            ship1.hit(3);
            expect(ship1.getIsSunk()).toBe(true);
        });
    }
);
