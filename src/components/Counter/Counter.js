import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount((c) => c - 1);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <p>Current value: {count}</p>
      <button onClick={decrement}>➖</button>
      <button onClick={increment}>➕</button>
    </div>
  );
}

export default Counter;
