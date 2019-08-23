const isPangram = require('../solutions/kata_13');
describe('Kata 13', () => {
  it('Basic tests', () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog.")).toBe(true);
    expect(isPangram("This is not a pangram.")).toBe(false);
    expect(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ.")).toBe(true);
  });
});
