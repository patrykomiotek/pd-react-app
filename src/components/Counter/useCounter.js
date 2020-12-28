import { useState } from 'react';

function useCounter(initialCount = 0, step = 1) { // custom hooks
  const [count, setCount] = useState(initialCount);

  // const state = useState(initialCount);
  // const count = state[0];
  // const setCount = state[1];

  const decrement = () => setCount((c) => c - step);
  const increment = () => setCount((c) => c + step);

  return { count, decrement, increment };
}

export default useCounter;
