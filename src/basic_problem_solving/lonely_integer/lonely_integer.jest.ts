import lonelyInteger from "./lonely_integer";

describe('Lonely Integer', () => {

    test('1-digit array', () => {
        expect(lonelyInteger([1])).toStrictEqual(1);
    });  

    test('Empty array', () => {
        expect(lonelyInteger([])).toStrictEqual(-1);
    });  

    test('Returns the loneliest number', () => {
        expect(lonelyInteger([2, 2, 1, 0, 0, 0])).toStrictEqual(1);
    });  

});