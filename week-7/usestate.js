import React, { useState } from 'react';

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      Click Count: {count}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default FunctionalCounter;