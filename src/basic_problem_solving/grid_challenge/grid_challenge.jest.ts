import gridChallenge from "./grid_challenge";

describe('Lonely Integer', () => {

    test.skip('No matches', () => {
        expect(gridChallenge(['kc', 'iu'])).toStrictEqual('YES');
    });  

    test('1 match', () => {
        expect(gridChallenge(['uxf', 'vof', 'hmp'])).toStrictEqual('NO');
    });  

    // test('2 matches', () => {
    //     expect(gridChallenge([5, 3, 2, 1, 4, 2, 3])).toStrictEqual(2);
    // });  

    // test('No matches 1 sock', () => {
    //     expect(gridChallenge([1])).toStrictEqual(0);
    // });  

});