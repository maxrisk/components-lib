import common from './common';

describe('Test common fn', () => {
  it('should get the correct', () => {
    const arr = common();
    const final = arr.reduce((sum, curNum) => {
      sum += curNum;
      return sum;
    }, 0)
    expect(final).toBe(4);
  })
})

