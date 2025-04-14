import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Count: {count}</h2>
      <button onClick={handleClick} style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
