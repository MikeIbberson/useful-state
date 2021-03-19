import React from 'react';
import Enzyme from 'enzyme';
import { act } from 'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import useChecked from '../useChecked';

Enzyme.configure({ adapter: new Adapter() });

const ids = Array.from({ length: 12 }).map((v, i) => i);
const low = ids.filter((item) => item < 6);
const high = ids.filter((item) => item > 5);

// eslint-disable-next-line
const Stub = ({ children }) => {
  const checked = useChecked();

  return (
    <>
      <input
        onChange={checked.onCheckAll(ids)}
        id="checkAll"
        type="checkbox"
      />
      <input
        onChange={checked.onCheckSome(low)}
        id="checkSomeBank1"
        type="checkbox"
      />
      <input
        onChange={checked.onCheckSome(high)}
        id="checkSomeBank2"
        type="checkbox"
      />
      <input
        onChange={checked.onCheck(1)}
        id="checkOne"
        type="checkbox"
      />
      {children(checked.checked)}
    </>
  );
};

describe('useChecked', () => {
  it('should check and uncheck all', () => {
    const c = jest.fn();
    const el = Enzyme.mount(<Stub>{c}</Stub>);

    act(() => {
      el.find('#checkAll')
        .props()
        .onChange();
    });

    expect(c).toHaveBeenCalledWith(ids);

    act(() => {
      el.find('#checkAll')
        .props()
        .onChange();
    });

    expect(c).toHaveBeenCalledWith([]);
  });

  it('should check and uncheck some', () => {
    const c = jest.fn();
    const el = Enzyme.mount(<Stub>{c}</Stub>);

    act(() => {
      el.find('#checkSomeBank2')
        .props()
        .onChange();
    });

    act(() => {
      el.find('#checkSomeBank1')
        .props()
        .onChange();
    });

    expect(c).toHaveBeenLastCalledWith(ids);
  });

  it('should check all and uncheck some', () => {
    const c = jest.fn();
    const el = Enzyme.mount(<Stub>{c}</Stub>);

    act(() => {
      el.find('#checkAll')
        .props()
        .onChange();
    });

    act(() => {
      el.find('#checkSomeBank1')
        .props()
        .onChange();
    });

    act(() => {
      el.find('#checkOne')
        .props()
        .onChange();
    });

    expect(c).toHaveBeenLastCalledWith([...high, 1]);
  });
});
