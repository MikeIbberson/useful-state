import React from 'react';

const curryCallback = (fn, value) => () => fn(value);

const filterByValue = (arr = [], value) =>
  arr.filter((i) => i !== value);

export const isInState = (arr = [], ids = []) =>
  arr.filter((item) => ids.includes(item));

export const filterStateByIds = (arr = [], ids = []) =>
  arr.filter((item) => !ids.includes(item));

export const hasLength = (arr) =>
  Array.isArray(arr) && arr.length > 0;

export const addToOrFilterFrom = (arr = [], value) =>
  arr.includes(value)
    ? filterByValue(arr, value)
    : arr.concat(value);

const useCheckboxes = () => {
  const [checked, setChecked] = React.useState([]);
  const isNotEmpty = hasLength(checked);
  const clear = curryCallback(setChecked, []);

  const isChecked = React.useCallback(
    (key) => checked.includes(key),
    [checked],
  );

  const onCheck = (key) => () =>
    setChecked((prev) => addToOrFilterFrom(prev, key));

  const onCheckAll = (ids) =>
    !isNotEmpty ? curryCallback(setChecked, ids) : clear;

  const onCheckSome = (ids) => () =>
    setChecked((prev) =>
      !hasLength(isInState(prev, ids))
        ? [...new Set([...ids, ...prev])]
        : filterStateByIds(prev, ids),
    );

  const hasChecked = () =>
    React.useCallback(isNotEmpty, [checked]);

  return {
    checked,
    setChecked,
    onCheck,
    onCheckAll,
    onCheckSome,
    isChecked,
    hasChecked,
    hasLength,
    clear,
  };
};

export default useCheckboxes;
