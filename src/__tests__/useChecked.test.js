import useChecked, {
  hasLength,
  addToOrFilterFrom,
  filterStateByIds,
} from '../useChecked';
import setState from '../utils';

describe('useChecked', () => {
  describe('"hasLength"', () => {
    it('should return truthy', () =>
      expect(hasLength([1])).toBeTruthy());

    it('should return truthy', () =>
      expect(hasLength([])).toBeFalsy());
  });

  describe('"addToOrFilterFrom"', () => {
    it('should redact if exists', () =>
      expect(addToOrFilterFrom([1, 2], 1)).toEqual([2]));

    it('should add if it does not exists', () =>
      expect(addToOrFilterFrom([1, 2], 3)).toEqual([
        1,
        2,
        3,
      ]));
  });

  describe('"filterStateByIds"', () => {
    it('should remove matches', () => {
      expect(
        filterStateByIds([1, 2, 3, 4], [3, 4]),
      ).toEqual([1, 2]);
    });
  });

  describe('"hook"', () => {
    it('should add to state', (done) => {
      setState.mockImplementation((f) => {
        expect(f([])).toEqual([1]);
        done();
      });

      const props = useChecked();
      props.onCheck(1)();
      expect(setState).toHaveBeenCalledWith(
        expect.any(Function),
      );
    });

    it('should clear state', () => {
      const props = useChecked();
      props.clear();
      expect(setState).toHaveBeenCalledWith([]);
    });

    it('should add multiple ids to state', () => {
      const props = useChecked();
      props.onCheckAll([1, 2, 3])();
      expect(setState).toHaveBeenCalledWith([1, 2, 3]);
    });

    it('should merge ids into state', (done) => {
      setState.mockImplementation((f) => {
        expect(f([])).toEqual([1, 2, 3]);
        done();
      });

      const props = useChecked();
      props.onCheckSome([1, 2, 3])();
      expect(setState).toHaveBeenCalledWith(
        expect.any(Function),
      );
    });

    it('should clear ids from state', (done) => {
      setState.mockImplementation((f) => {
        expect(f([1, 2, 3, 4, 5])).toEqual([4, 5]);
        done();
      });

      const props = useChecked();
      props.onCheckSome([1, 2, 3])();
      expect(setState).toHaveBeenCalledWith(
        expect.any(Function),
      );
    });
  });
});
