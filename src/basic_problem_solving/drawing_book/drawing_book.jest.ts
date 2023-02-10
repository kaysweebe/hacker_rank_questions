import pageCount from './drawing_book'

describe('Lonely Integer', () => {

    test('Flips to middle page', () => {
        expect(pageCount(5, 3)).toStrictEqual(1);
    });  

    test('Flips to first page', () => {
        expect(pageCount(12, 1)).toStrictEqual(0);
    });  

    test('Flips to last page', () => {
        expect(pageCount(12, 12)).toStrictEqual(0);
    });  

    test('Flips to second to last page', () => {
        expect(pageCount(6, 5)).toStrictEqual(1);
    });  

    test('Flips to last page where page number does not equal last page', () => {
        expect(pageCount(7, 6)).toStrictEqual(0);
    });  

});