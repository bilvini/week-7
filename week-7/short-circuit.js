import React, { useState } from 'react';

function ConditionalRenderingShortCircuit() {
  const [userData, setUserData] = useState(null);

  return (
    <div>
      {userData ? (
        <p>User name: {userData.name}</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default ConditionalRenderingShortCircuit;