import diagonalDifference from "./diagonal_difference";

describe('Diagonal difference', () => {

    test('Equals zero', () => {
        expect(diagonalDifference([[1, 1, 1], [1, 1, 1], [1, 1, 1]])).toStrictEqual(0);
    });  

    test('First term greater than second', () => {
        expect(diagonalDifference([[1, 1, 1], [1, 1, 1], [1, 1, 3]])).toBeGreaterThan(0);
        expect(diagonalDifference([[1, 1, 1], [1, 1, 1], [1, 1, 3]])).toStrictEqual(2);
    });  

    test('Second term greater than second', () => {
        expect(diagonalDifference([[1, 1, 1], [1, 1, 1], [3, 1, 1]])).toBeGreaterThan(0);
        expect(diagonalDifference([[1, 1, 1], [1, 1, 1], [1, 1, 3]])).toStrictEqual(2);
    });

});