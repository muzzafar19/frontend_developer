import React, { useState } from "react";

const Counter = () => {
    

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => setCount(count - 1);

    const clear = () => setCount(0);

    return (

        <div className="text-center">
            <h2>counter:{count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={clear}>clear</button>
        </div>
    );
};
export default Counter;