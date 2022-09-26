import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    function valueSetAdd(){
        setCount(count + 1);
    }
    function valueSetSub(){
        setCount(count - 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button className="btn btn-primary">Button</button>
            <button onClick={valueSetAdd}>Add</button>
            <button onClick={valueSetSub}>Minus</button>
        </div>
    );
};

export default Counter;