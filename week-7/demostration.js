import React from 'react';

function EventPropagation() {
  const handleOuterClick = (event) => {
    console.log('Outer div clicked');
  };

  const handleInnerClick = (event) => {
    console.log('Inner div clicked');
    event.stopPropagation(); // Prevents propagation to outer div
  };

  return (
    <div onClick={handleOuterClick}>
      <div onClick={handleInnerClick}>
        Click me!
      </div>
    </div>
  );
}

export default EventPropagation;