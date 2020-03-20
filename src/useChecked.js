import React from 'react';

const curryCallback = (fn, value) => () => fn(value);

const filterByValue = (arr = [], value) =>
  arr.filter((i) => i !== value);

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
    setChecked(addToOrFilterFrom(checked, key));

  const onCheckAll = (ids) =>
    !isNotEmpty ? curryCallback(setChecked, ids) : clear;

  const hasChecked = () =>
    React.useCallback(isNotEmpty, [checked]);

  return {
    checked,
    setChecked,
    onCheck,
    onCheckAll,
    isChecked,
    hasChecked,
    hasLength,
    clear,
  };
};

export default useCheckboxes;