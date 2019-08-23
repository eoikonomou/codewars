const maskify = require('../solutions/kata_2');
describe('Basic', () => {
  it('Basic tests', () => {
    expect(maskify("4556364607935616")).toBe("############5616");
    expect(maskify("64607935616")).toBe("#######5616");
    expect(maskify("1")).toBe("1");
    expect(maskify("")).toBe("");
  });
});
