import matchingStrings from "./matching_strings";

describe('Matching query strings', () => {

    test('Found all matches', () => {
        expect(matchingStrings(['1', '2a', 'cc3', 'D4', 'a5'], ['1', '2a', 'a5', 'cc3', 'D4'])).toStrictEqual([1, 1, 1, 1, 1]);
    });  

    test('Found 1/2 matches 2 times', () => {
        expect(matchingStrings(['abc', '8dbr', 'kr4e', '8dbr'], ['8dbr', '0'])).toStrictEqual([2, 0]);
    });  

    test('Empty string has 1 match', () => {
        expect(matchingStrings(['', '8dbr', 'kr4e', '8dbr'], [''])).toStrictEqual([1]);
    });  

    test('Empty string has 0 matches', () => {
        expect(matchingStrings(['abc', '8dbr', 'kr4e', '8dbr'], [''])).toStrictEqual([0]);
    });  

});