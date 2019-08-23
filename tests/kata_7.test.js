const getCount = require('../solutions/kata_7');
describe('Kata 7', () => {
  it('Basic tests', () => {
    expect(getCount('abracadabra')).toBe(5);
    expect(getCount('my pyx')).toBe(0);
  });
});
