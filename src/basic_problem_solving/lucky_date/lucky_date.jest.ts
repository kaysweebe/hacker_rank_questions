import luckyDate from "./lucky_date";

describe('Lucky Date', () => {

    test('Lucky Date with leading 0 divisible by 4', () => {
        expect(luckyDate('02-08-2024')).toStrictEqual(true);
    });  

    test('Lucky Date with leading 0 divisible by 7', () => {
        expect(luckyDate('07-07-2135')).toStrictEqual(true);
    });  

    test('Unlucky Date with leading 0 not divisible by 4 or 7', () => {
        expect(luckyDate('04-02-2005')).toStrictEqual(false);
    });  

    test('Lucky date without leading 0 divisible by 4', () => {
        expect(luckyDate('12-24-2008')).toStrictEqual(true)
    })

    test('Lucky date without leading 0 divisible by 7', () => {
        expect(luckyDate('12-00-5000')).toStrictEqual(true)
    })

    test('Unlucky date without leading 0 not divisible by 4 or 7', () => {
        expect(luckyDate('11-25-2039')).toStrictEqual(false)
    })

});