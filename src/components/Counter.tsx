import { useState, useEffect } from 'react';
import "../styles.css"

export default function Counter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);

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
}
