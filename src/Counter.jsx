import React, { useState } from 'react';
import './index.css'; // Make sure to import the CSS file

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    return (
        <div className="counter-wrapper">
            <div className="counter-card">
                <h1 className="counter-title">Counter</h1>
                <p className="counter-display">{count}</p>
                <div className="counter-buttons">
                    <button className="btn btn-decrement" onClick={decrement}>−</button>
                    <button className="btn btn-reset" onClick={reset}>⟳</button>
                    <button className="btn btn-increment" onClick={increment}>＋</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
