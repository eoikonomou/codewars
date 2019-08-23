const disemvowel = require('../solutions/kata_4');
describe('Basic', () => {
  it('Basic tests', () => {
    expect(disemvowel('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!');
  });
});
