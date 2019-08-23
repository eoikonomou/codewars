const iqTest = require('../solutions/kata_3');
describe('Basic', () => {
  it('Basic tests', () => {
    expect(iqTest("2 4 7 8 10")).toBe(3);
    expect(iqTest("1 2 1 1")).toBe(2);
  });
});
