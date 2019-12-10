import React from 'react';

export default (defaultValue = '') => {
  const ref = React.useRef();
  const [value, setValue] = React.useState(defaultValue);

  const onFocus = React.useCallback(() => {
    if (!ref.current) return;
    ref.current.focus();
  }, []);

  const onClear = React.useCallback(() => {
    setValue('');
    onFocus();
  }, []);

  const onChange = React.useCallback(({ target }) => {
    setValue(target.value);
  }, []);

  return {
    ref,
    onChange,
    onFocus,
    onClear,
    setValue,
    value,
  };
};
