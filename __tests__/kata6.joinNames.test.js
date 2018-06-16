const { joinNames } = require('../src');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {
    const array = [{
      name: "Bart"
    }, {
      name: "Lisa"
    }, {
      name: "Maggie"
    }];

    expect(joinNames(array)).toBe("Bart, Lisa, Maggie");

  });
});




