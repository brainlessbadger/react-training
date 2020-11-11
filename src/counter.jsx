import React, { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count => ++count);

    return <button 
        type="button" 
        className="button" 
        onClick={increment}
    >
        Clicked {count} times!
    </button>
}