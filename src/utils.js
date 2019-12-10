import React from 'react';

const setState = jest.fn();

beforeAll(() => {
  jest
    .spyOn(React, 'useState')
    .mockImplementation((v) => [v, setState]);

  jest
    .spyOn(React, 'useCallback')
    .mockImplementation((fn) => fn);

  jest.spyOn(React, 'useRef').mockReturnValue({
    current: {
      focus: jest.fn(),
    },
  });
});

beforeEach(() => {
  setState.mockReset();
});

export default setState;
