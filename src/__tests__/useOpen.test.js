import useOpen from '../useOpen';
import setState from '../utils';

describe('useOpen', () => {
  it('should default to close', () => {
    const { isOpen } = useOpen();
    expect(isOpen).toBeFalsy();
  });

  it('should set target to open state', () => {
    useOpen().open({
      target: {
        current: 'foo',
      },
    });
    expect(setState).toHaveBeenCalledWith({
      current: 'foo',
    });
  });

  it('should set target to null', () => {
    useOpen().close();
    expect(setState).toHaveBeenCalledWith(null);
  });
});
