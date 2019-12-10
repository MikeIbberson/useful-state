import React from 'react';

export default (defaultState = false) => {
  const [state, setState] = React.useState(defaultState);
  const open = React.useCallback(() => {
    setState(true);
  }, [state]);

  const close = React.useCallback(() => {
    setState(false);
  }, [state]);

  const toggle = React.useCallback(() => {
    setState(!state);
  }, [state]);

  return {
    state,
    toggle,
    open,
    close,
  };
};
