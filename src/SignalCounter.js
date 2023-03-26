import React from 'react';
import { useSignal } from '@preact/signals-react';

const SignalCounter = () => {
    const count = useSignal(0);
    console.log('Signal Counter');
    return (
        <>
            <div className="counter-box">
                <h1>Counter using signal and useSignal hook</h1>
                <div>First Counter value: {count}</div>
                <div>Second counter value: {count} </div>
                <br />
                <button className="btn" onClick={() => count.value++}>
                    Increase the counter 1
                </button>
            </div>
        </>
    );
};

export default SignalCounter;
