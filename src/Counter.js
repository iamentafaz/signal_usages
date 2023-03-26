import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    console.log('Counter');
    return (
        <>
            <div className="counter-box">
                <h1>Counter using react useState hooks</h1>
                <div>Counter value: {counter}</div>
                <br />
                <button className="btn" onClick={() => setCounter(counter + 1)}>
                    Increase the counter
                </button>
            </div>
        </>
    );
};

export default Counter;
