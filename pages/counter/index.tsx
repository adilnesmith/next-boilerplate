import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from 'lib/hooks/selectors';
import {
  decrement,
  increment,
  getCount,
} from '../reducers/counter';

export function Counter() {
  const count = useAppSelector(getCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button

          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button

          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
