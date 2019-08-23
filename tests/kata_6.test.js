const isValidWalk = require('../solutions/kata_6');
describe('Basic', () => {
  it('Basic tests', () => {
    expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(true);
    expect(!isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])).toBe(true);
    expect(!isValidWalk(['w'])).toBe(true);
    expect(!isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(true);
  });
});
