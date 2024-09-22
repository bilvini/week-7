import React, { useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <ChildComponent count={count} onIncrement={incrementCount} />
      <p>Parent Count: {count}</p>
    </div>
  );
}

function ChildComponent(props) {
  const { count, onIncrement } = props;

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <p>Child Count: {count}</p>
    </div>
  );
}

export default ParentComponent;