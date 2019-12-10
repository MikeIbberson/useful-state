import hook from '../useToggle';
import setState from '../utils';

describe('useToggle', () => {
  it('should call setState with inverted state value', () => {
    hook().toggle();
    expect(setState).toHaveBeenCalledWith(true);
  });

  it('should call setState with false', () => {
    hook().close();
    expect(setState).toHaveBeenCalledWith(false);
  });

  it('should call setState with true', () => {
    hook().open();
    expect(setState).toHaveBeenCalledWith(true);
  });

  it('should set a default value', () => {
    expect(hook(true).state).toBeTruthy();
  });
});
