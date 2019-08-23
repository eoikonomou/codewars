const findNb = require('../solutions/kata_9');
describe('Kata 9', () => {
  it('Basic tests', () => {
    expect(findNb(4183059834009)).toBe(2022);
    expect(findNb(24723578342962)).toBe(-1);
    expect(findNb(135440716410000)).toBe(4824);
    expect(findNb(40539911473216)).toBe(3568);
  });
});
