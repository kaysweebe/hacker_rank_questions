import pangrams from "./pangram";

describe('Pangram strings', () => {

    test('abcdefghijklmnopqrstuvwxyz', () => {
      expect(pangrams('abcdefghijklmnopqrstuvwxyz')).toBe('pangram');
    });  
    
    test('12:00:01AM -> 00:00:01', () => {
      expect(pangrams('aacdefghijklmnopqrstuvwxyz')).toBe('not pangram');
    });
    
    test('12:00:00PM -> 12:00:00', () => {
      expect(pangrams('The quick brown fox jumps over the lazy dog')).toBe('pangram');
    });
  
    test('11:59:59PM -> 23:59:59', () => {
      expect(pangrams('The slow brown dog runs from the quick fox')).toBe('not pangram');
    });

    test('07:00:00AM -> 07:00:00', () => {
      expect(pangrams('')).toBe('not pangram');
    });

    test('07:00:00PM -> 19:00:00', () => {
      expect(pangrams('AabcdefghijklmnopqrstuvwxyzZZZ')).toBe('pangram');
    });

  });