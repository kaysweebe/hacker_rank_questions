import timeConversion from "./time_conversion";

describe('Time conversion from 12hr to 24hr time', () => {

    test('12:00:00AM -> 00:00:00', () => {
      expect(timeConversion('12:00:00AM')).toBe('00:00:00');
    });  
    
    test('12:00:01AM -> 00:00:01', () => {
      expect(timeConversion('12:00:01AM')).toBe('00:00:01');
    });
    
    test('12:00:00PM -> 12:00:00', () => {
      expect(timeConversion('12:00:00PM')).toBe('12:00:00');
    });
  
    test('11:59:59PM -> 23:59:59', () => {
      expect(timeConversion('11:59:59PM')).toBe('23:59:59');
    });

    test('07:00:00AM -> 07:00:00', () => {
      expect(timeConversion('07:00:00AM')).toBe('07:00:00');
    });

    test('07:00:00PM -> 19:00:00', () => {
      expect(timeConversion('07:00:00PM')).toBe('19:00:00');
    });

  });