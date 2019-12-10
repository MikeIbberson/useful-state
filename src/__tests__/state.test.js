import { useToggle, useValue } from '..';

describe('state', () => {
  it('should export named hooks', () => {
    expect(useToggle).toEqual(expect.any(Function));
    expect(useValue).toEqual(expect.any(Function));
  });
});
