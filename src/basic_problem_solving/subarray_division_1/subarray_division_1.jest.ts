import birthday from "./subarray_division_1";

describe('birthday subarray division', () => {
    test('Simple success case', () => {
        const s = [2,2,1,3,4]
        const d = 4
        const m = 2
        expect(birthday(s,d,m)).toBe(2)
    })

    test('Simple success case', () => {
        const s = [2,2,1,3,4]
        const d = 5
        const m = 3
        expect(birthday(s,d,m)).toBe(1)
    })
    
    test('Simple success case', () => {
        const s = [2,2,1,3,4]
        const d = 5
        const m = 1
        expect(birthday(s,d,m)).toBe(0)
    })
})