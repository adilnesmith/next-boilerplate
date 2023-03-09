import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from 'lib/hooks/selectors';
import {
  decrement,
  increment,
  selectCount,
} from './reducer';

export function Counter() {
  const count = useAppSelector(selectCount);
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
