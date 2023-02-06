import permuting_two_arrays from "./permuting_two_arays";

describe('Can permute two arrays such that elements can sum to amount k', () => {

    test('Simple passing case', () => {
        const A = [1, 1]
        const B = [ 1, 1]
        const k = 2
      expect(permuting_two_arrays(k, A, B)).toBe('YES');
    });  

    test('Simple failing case', () => {
        const A = [0, 1]
        const B = [ 1, 1]
        const k = 2
      expect(permuting_two_arrays(k, A, B)).toBe('NO');
    });  

    test('Total k-sum greater than sumA + sumB but still cannot be sorted correctly', () => {
        const A = [20, 1]
        const B = [ 1, 1]
        const k = 4
      expect(permuting_two_arrays(k, A, B)).toBe('NO');
    });  

    test('Total k-sum greater than sumA + sumB but still cannot be sorted correctly', () => {
        const A = [3, 1, 5, 4, 1, 5, 4, 4, 2, 3, 4, 4, 5, 4, 4, 2, 4, 5, 4, 2, 4, 1, 1, 1, 2, 3, 4, 3, 4, 2, 2, 2, 5, 1, 1, 1, 2, 1, 3, 5, 3, 4, 4, 4, 5, 1, 5, 4, 5, 5, 2, 2, 3, 5, 4, 3, 3, 2, 4, 2, 5, 4, 4, 5, 3, 4, 2, 3, 3, 3, 5, 2, 5, 4, 4, 1, 5, 1, 1, 1, 4, 2, 5, 5, 2, 1, 3, 3, 1, 1, 5, 5, 5]
        const B = [9, 5, 7, 5, 7, 0, 6, 9, 4, 1, 11, 14, 7, 2, 2, 13, 14, 10, 10, 1, 5, 9, 12, 2, 4, 5, 11, 2, 8, 10, 7, 7, 11, 11, 7, 5, 4, 7, 8, 11, 13, 6, 8, 2, 3, 6, 11, 5, 10, 5, 9, 8, 6, 13, 8, 12, 5, 7, 14, 7, 4, 5, 0, 9, 3, 6, 8, 6, 10, 11, 10, 3, 2, 10, 10, 8, 6, 11, 10, 6, 6, 14, 3, 10, 3 ,10, 2, 0, 4, 8, 14, 11, 1]
        const k = 5
      expect(permuting_two_arrays(k, A, B)).toBe('YES');
    });  
  });