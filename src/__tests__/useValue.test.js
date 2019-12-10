import hook from '../useValue';
import setState from '../utils';

describe('useValue', () => {
  it('should call setState event value', () => {
    const value = 'foo';
    hook().onChange({ target: { value } });
    expect(setState).toHaveBeenCalledWith(value);
  });

  it('should clear the state', () => {
    const defaultValue = 'foo';
    const { value, onClear } = hook(defaultValue);
    expect(value).toBe(defaultValue);
    onClear();
    expect(setState).toHaveBeenCalledWith('');
  });

  it('should call focus', () => {
    const { ref, onFocus } = hook();
    onFocus();
    expect(ref.current.focus).toHaveBeenCalled();
  });
});
