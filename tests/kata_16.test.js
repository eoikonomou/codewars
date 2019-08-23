const fibonacci = require('../solutions/kata_16');
describe("Kata 16 Test Suite", function () {
  it("should calculate large Fibonacci numbers", function () {
    expect(fibonacci(70)).toBe(190392490709135);
    expect(fibonacci(60)).toBe(1548008755920);
    expect(fibonacci(50)).toBe(12586269025);
  });
});
