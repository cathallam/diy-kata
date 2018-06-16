const { booleanToWord } = require('../src');

describe('Determine if true or false', () => {
  // how do we create specs again???
  it('returns Yes if passed true', () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  it('returns No if passed false', () => {
    expect(booleanToWord(false)).toBe("No");
  });
});


