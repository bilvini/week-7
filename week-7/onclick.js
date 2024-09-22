import React, { useState } from 'react';

function EventHandlingComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    console.log('Input value:', event.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <input type="text" onChange={handleChange} />
      <p>Count: {count}</p>
    </div>
  );
}

export default EventHandlingComponent;