import miniMaxSum from "./mini_max_sum";

describe('Mini Max Sum', () => {

    test('Positive numbers', () => {
        expect(miniMaxSum([1, 2, 3, 4, 5])).toStrictEqual([10, 14]);
    });  

    test('All zeroes', () => {
        expect(miniMaxSum([0, 0, 0, 0, 0])).toStrictEqual([0, 0]);
    });  

    test('Sum bigger than 32 bit', () => {
        expect(miniMaxSum([2147483647, 1, 0, 0, 0])).toStrictEqual([1, 2147483648]);
    });  

});