import React, { useReducer, useState } from 'react';


const initial = 0;


function reducer(state, action) {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'zero':
      return initial;
    default:
      return state;
  }
}


function Usereducer() {
  const [data, setData] = useState("nasjh");
  const [count, dispatch] = useReducer(reducer, initial);

  return (
    <div className='text-center p-5'>
      <h1>Hello, count: {count}</h1>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('zero')}>Reset</button>
    </div>
  );
}

export default Usereducer;
