const nbYear = require('../solutions/kata_11');
describe('Kata 11', () => {
  it('Basic tests', () => {
    expect(nbYear(1500, 5, 100, 5000)).toBe(15);
    expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
    expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94);
  });
});
