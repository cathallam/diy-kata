const { humanCatDogYears } = require('../src');


describe('When humanCatDogYears is passed a number (representing human years)', () => {
  it('should return an array of three numbers', () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
});


