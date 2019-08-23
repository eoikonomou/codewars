const isPrime = require('../solutions/kata_12');

describe("Basic", () => {

  it("Basic tests", () => {

    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(73)).toBe(true);
    expect(isPrime(75)).toBe(false);
    expect(isPrime(-1)).toBe(false);

  });

  it("Test prime", () => {

    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(41)).toBe(true);
    expect(isPrime(5099)).toBe(true);

  });

  it("Test not prime", () => {

    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(45)).toBe(false);
    expect(isPrime(-5)).toBe(false);
    expect(isPrime(-8)).toBe(false);
    expect(isPrime(-41)).toBe(false);

  });
});

describe("Random tests", () => {

  let generate = function () {
    let precalculate = function () {

      let count = (1 << 16);
      let sieve = new Uint8Array(count)
      sieve[0] = sieve[1] = 1;
      for (let idx = 2; idx < 256; ++idx) {

        if (sieve[idx] == 1)
          continue;

        sieve[idx] = 0;
        for (let n = idx * idx; n < sieve.length; n += idx)
          sieve[n] = 1;
      }
      return sieve;
    };
    let sieve = precalculate();
    let smallPrimes = [];
    for (let i = 0; i < sieve.length; ++i)
      if (!sieve[i])
        smallPrimes.push(i);

    let checkPrime = function (num) {

      if (num < 3 || (num & 1 == 0))
        return false;

      let max = Math.sqrt(num) | 0;
      for (let i = 0; smallPrimes[i] <= max; ++i)
        if (num % smallPrimes[i] == 0)
          return false;
      return true;
    };
    let nextPrime = function (num) {
      while (!checkPrime(++num));
      return num;
    }

    let cases = [];
    let MAX = 2000000000;
    for (let i = 0; i < 500; ++i) {
      let num = (Math.random() * MAX) | 0;
      num = nextPrime(num);
      cases.push({
        num: num,
        prime: true
      });
    }

    for (let i = 0; i < 450; ++i) {
      let num = (Math.random() * MAX) | 0;
      while (checkPrime(++num));
      cases.push({
        num: num,
        prime: false
      });
    }

    for (let i = 0; i < 40; ++i) {
      let num = (Math.random() * (1 << 15)) | 0;
      num = nextPrime(num);
      cases.push({
        num: num * num,
        prime: false
      });
    }

    for (let i = 0; i < 10; ++i) {
      let num = (Math.random() * MAX) | 0;
      num = nextPrime(num);
      cases.push({
        num: -num,
        prime: false
      });
    }

    cases = cases.map(c => {
      return {
        c: c,
        k: Math.random()
      };
    });
    cases.sort((e1, e2) => e1.k - e2.k);
    cases = cases.map(e => e.c);

    return cases;
  }

  it("Random tests", () => {
    let testCases = generate();
    testCases.forEach(({
      num,
      prime
    }) => {
      expect(isPrime(num)).toBe(prime);
    });
  });
});
