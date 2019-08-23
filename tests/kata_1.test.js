const multiply = require('../solutions/kata_1');

describe('Basic', () => {
  it('Basic Tests', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(2, 5)).toBe(10);
    expect(multiply(4, 3)).toBe(12);
    expect(multiply(8, 3)).toBe(24);
  });
});
