import useCounter from './useCounter';

function Counter() {

  // using property aliases
  const { count: count1, decrement: decrement1, increment: increment1 } = useCounter(1);
  const { count: count2, decrement: decrement2, increment: increment2 } = useCounter(13, 5);

  // using properties
  // const counterData1 = useCounter(1);
  // const count1 = counterData1.count;
  // const decrement1 = counterData1.decrement;
  // const increment1 = counterData1.increment;

  // const counterData2 = useCounter(13, 5);
  // const count2 = counterData2.count;
  // const decrement2 = counterData2.decrement;
  // const increment2 = counterData2.increment;

  return (
    <div>
      <div>
        <p>Current value: {count1}</p>
        <button onClick={decrement1}>➖</button>
        <button onClick={increment1}>➕</button>
      </div>
      <div>
        <p>Current value: {count2}</p>
        <button onClick={decrement2}>➖</button>
        <button onClick={increment2}>➕</button>
      </div>
    </div>
  );
}

export default Counter;
