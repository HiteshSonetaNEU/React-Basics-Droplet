// components/Counter.tsx
import React, { useState, useEffect } from 'react';
import "../styles.css"
interface CounterProps {
  initialCount: number;
}
const Counter: React.FC<CounterProps> = ({initialCount}) => {
  const [count, setCount] = useState<number>(initialCount);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  

  return (
    <div className="container">
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button className="button" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};



export default Counter;
