import common from './common';

describe('Test common fn', () => {
  it('should get the correct', () => {
    const arr = common();
    expect(arr[0] + arr[1]).toBe(2);
  })
})

