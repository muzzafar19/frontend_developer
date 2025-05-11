import React, { useRef, useState } from "react";



function Useref() {
    const [count, setCount] = useState(0);

    const renderCount = useRef(1);

    const increaseCount = () => {
        setCount(count + 1);
        renderCount.current += 1; // manually badha rahe hain render count
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Count: {count}</h2>

            <button onClick={increaseCount}>Increase Count</button>

            <p style={{ marginTop: '20px' }}>
                Screen ab tak {renderCount.current} baar render ho chuki hai.
            </p>
        </div>
    );
}


export default Useref;