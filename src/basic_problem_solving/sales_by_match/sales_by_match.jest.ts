import sockMerchant from "./sales_by_match";

describe('Lonely Integer', () => {

    test('No matches', () => {
        expect(sockMerchant([5, 3])).toStrictEqual(0);
    });  

    test('1 match', () => {
        expect(sockMerchant([5, 3, 5])).toStrictEqual(1);
    });  

    test('2 matches', () => {
        expect(sockMerchant([5, 3, 2, 1, 4, 2, 3])).toStrictEqual(2);
    });  

    test('No matches 1 sock', () => {
        expect(sockMerchant([1])).toStrictEqual(0);
    });  

});