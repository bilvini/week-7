import React, { useRef, useState } from 'react';

function ControlledUncontrolledForm() {
  const [controlledName, setControlledName] = useState('');
  const uncontrolledNameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Controlled Name:', controlledName);
    console.log('Uncontrolled Name:', uncontrolledNameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Controlled Name:</label>
      <input type="text" value={controlledName} onChange={(e) => setControlledName(e.target.value)} />
      <label>Uncontrolled Name:</label>
      <input type="text" ref={uncontrolledNameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledUncontrolledForm;