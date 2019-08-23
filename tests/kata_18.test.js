const whoIsNext = require('../solutions/kata_18');
describe('Kata 18 Test Suite', () => {
  it('Basic tests', () => {
    expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)).toBe("Sheldon");
    expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)).toBe("Penny");
    expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)).toBe("Leonard");
  });
});
