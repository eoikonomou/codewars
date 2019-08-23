const solution = require('../solutions/kata_15');
describe('Kata 15', () => {
  it('Basic tests', () => {
    expect(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))
      .toBe("apples, plums\npears\noranges");
    expect(solution("Q @b\nu\ne -e f g", ["@", "-"]))
      .toBe("Q\nu\ne");
  });
});
