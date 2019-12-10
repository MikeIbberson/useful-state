import React from 'react';

export default (defaultValue) => {
  const [state, setState] = React.useState(defaultValue);

  const open = React.useCallback((e) => {
    if (e && 'target' in e) {
      setState(e.target);
    }
  }, []);

  const close = React.useCallback(() => {
    setState(null);
  }, []);

  return {
    isOpen: Boolean(state),
    anchorEl: state,
    close,
    open,
  };
};
