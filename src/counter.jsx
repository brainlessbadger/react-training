import React, { useState } from 'react';

const Button = ({children, onClick}) => {
    return <button type='button' className='button' onClick={onClick}>
        {children}
    </button>
}

export const Counter = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count => count - 1);
    }

    const increment = () => {
        setCount(count => count + 1);
    }

    return <div className='counter'>
        <span className='center'>
            Count: {count}
        </span>
        <div className='button-container'>
            <Button onClick={decrement}>
                -
            </Button>
            <Button onClick={increment}>
                +
            </Button>
        </div>
    </div>
}